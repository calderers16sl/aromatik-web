/**
 * Cloudflare Pages Middleware — Language Detection
 * Detects user language from Accept-Language header + CF-IPCountry
 * and redirects to the appropriate language prefix.
 * If the user has manually selected a language (cookie), that takes priority.
 * Cookie: aromatik_lang — functional cookie, no consent required.
 */

const SUPPORTED_LANGS = ['en', 'fr', 'ca', 'de', 'zh', 'ko', 'pt', 'nl'];
const DEFAULT_LANG = 'es';
const COOKIE_NAME = 'aromatik_lang';
const COOKIE_TTL = 60 * 60 * 24 * 365; // 1 year

// Country → language fallback map
const COUNTRY_LANG = {
  // English-speaking
  GB: 'en', US: 'en', AU: 'en', CA: 'en', NZ: 'en', IE: 'en',
  IN: 'en', ZA: 'en', PH: 'en', NG: 'en', KE: 'en', GH: 'en',
  // French-speaking
  FR: 'fr', BE: 'fr', MC: 'fr', LU: 'fr',
  // German-speaking
  DE: 'de', AT: 'de', LI: 'de',
  // Chinese-speaking
  CN: 'zh', TW: 'zh', HK: 'zh', MO: 'zh',
  // Korean-speaking
  KR: 'ko',
  // Portuguese-speaking
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', CV: 'pt', GW: 'pt', ST: 'pt', TL: 'pt',
  // Dutch-speaking
  NL: 'nl', SR: 'nl',
};

// Pages that exist ONLY in default (es) and should never be redirected
const SKIP_PATHS = new Set(['/aviso-legal', '/aviso-legal/']);

/**
 * Parse Accept-Language header and return best matching supported locale.
 * e.g. "fr-CH,fr;q=0.9,en;q=0.8" → 'fr'
 */
function detectFromAcceptLanguage(header) {
  if (!header) return null;
  const entries = header
    .split(',')
    .map(s => {
      const parts = s.trim().split(';q=');
      const lang = parts[0].trim().split('-')[0].toLowerCase();
      const q = parts[1] ? parseFloat(parts[1]) : 1.0;
      return { lang, q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of entries) {
    if (lang === DEFAULT_LANG) return DEFAULT_LANG;
    if (SUPPORTED_LANGS.includes(lang)) return lang;
  }
  return null;
}

/**
 * Get language from CF-IPCountry header.
 */
function detectFromCountry(country) {
  if (!country) return null;
  return COUNTRY_LANG[country] || null;
}

/**
 * Get language preference from cookie.
 */
function getLangCookie(cookieHeader) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/aromatik_lang=([a-z]{2})/);
  if (!match) return null;
  const lang = match[1];
  return (lang === DEFAULT_LANG || SUPPORTED_LANGS.includes(lang)) ? lang : null;
}

/**
 * Build a response that clones src but adds a Set-Cookie header.
 */
function responseWithCookie(response, lang) {
  const headers = new Headers(response.headers);
  headers.append(
    'Set-Cookie',
    `${COOKIE_NAME}=${lang}; Path=/; Max-Age=${COOKIE_TTL}; SameSite=Lax`
  );
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/**
 * Build a redirect response, optionally with a cookie.
 */
function redirectWithCookie(dest, lang) {
  return new Response(null, {
    status: 302,
    headers: {
      'Location': dest,
      'Set-Cookie': `${COOKIE_NAME}=${lang}; Path=/; Max-Age=${COOKIE_TTL}; SameSite=Lax`,
    },
  });
}

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // ── Skip non-page requests ──────────────────────────────────────
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/admin/') ||
    /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf|webp|avif|pdf|xml|txt)$/i.test(pathname)
  ) {
    return next();
  }

  // ── Skip pages that only exist in Spanish ───────────────────────
  if (SKIP_PATHS.has(pathname)) {
    return next();
  }

  // ── Already on a localized path ─────────────────────────────────
  // Set cookie so that if the user later hits a non-prefixed URL we remember.
  const activeLang = SUPPORTED_LANGS.find(
    l => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (activeLang) {
    const existingCookie = getLangCookie(request.headers.get('cookie'));
    if (!existingCookie) {
      // First localized page visit — persist language in cookie
      const response = await next();
      return responseWithCookie(response, activeLang);
    }
    return next();
  }

  // ── Check cookie first (user manually selected language) ────────
  const cookieLang = getLangCookie(request.headers.get('cookie'));
  if (cookieLang !== null) {
    if (cookieLang === DEFAULT_LANG) return next();
    const dest = buildRedirectUrl(url, cookieLang, pathname);
    return Response.redirect(dest, 302);
  }

  // ── Auto-detect: Accept-Language wins; country is tiebreaker ────
  const acceptLang = detectFromAcceptLanguage(request.headers.get('Accept-Language'));
  const countryLang = detectFromCountry(request.headers.get('CF-IPCountry'));
  const detectedLang = acceptLang ?? countryLang ?? DEFAULT_LANG;

  if (detectedLang !== DEFAULT_LANG) {
    const dest = buildRedirectUrl(url, detectedLang, pathname);
    return redirectWithCookie(dest, detectedLang);
  }

  // Spanish detected on first visit — set cookie and continue
  const response = await next();
  return responseWithCookie(response, DEFAULT_LANG);
}

function buildRedirectUrl(url, lang, pathname) {
  const suffix = pathname === '/' ? '' : pathname;
  const newUrl = new URL(`/${lang}${suffix}`, url);
  // Preserve query params (gclid, utm_*, etc.) through lang redirects
  newUrl.search = url.search;
  return newUrl.toString();
}
