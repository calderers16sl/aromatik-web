/**
 * Cloudflare Pages Middleware — Language Detection
 * Detects user language from Accept-Language header + CF-IPCountry
 * and redirects to the appropriate language prefix.
 * If the user has manually selected a language (cookie), that takes priority.
 */

const SUPPORTED_LANGS = ['en', 'fr', 'ca', 'de', 'zh', 'ko', 'pt', 'nl'];
const DEFAULT_LANG = 'es';

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
  // Catalan regions (handled by Accept-Language, Spain stays ES)
  // ES → 'es' (default)
};

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

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // ── Skip non-page requests ──────────────────────────────────────
  // Static assets, API routes, sitemap, robots
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/admin/') ||
    /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf|webp|avif|pdf|xml|txt)$/i.test(pathname)
  ) {
    return next();
  }

  // ── Already on a localized path? Don't redirect again ──────────
  const isLocalized = SUPPORTED_LANGS.some(
    lang => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );
  if (isLocalized) return next();

  // ── Check cookie first (user manually selected language) ────────
  const cookieLang = getLangCookie(request.headers.get('cookie'));
  if (cookieLang !== null) {
    if (cookieLang === DEFAULT_LANG) return next(); // stay on /
    const dest = buildRedirectUrl(url, cookieLang, pathname);
    return Response.redirect(dest, 302);
  }

  // ── Detect from Accept-Language (primary signal) ─────────────
  const acceptLang = detectFromAcceptLanguage(request.headers.get('Accept-Language'));

  // ── Detect from IP country (secondary signal) ─────────────────
  const countryLang = detectFromCountry(request.headers.get('CF-IPCountry'));

  // Accept-Language wins; country is the tiebreaker
  const detectedLang = acceptLang ?? countryLang ?? DEFAULT_LANG;

  if (detectedLang && detectedLang !== DEFAULT_LANG) {
    const dest = buildRedirectUrl(url, detectedLang, pathname);
    return Response.redirect(dest, 302);
  }

  return next();
}

function buildRedirectUrl(url, lang, pathname) {
  const suffix = pathname === '/' ? '' : pathname;
  return new URL(`/${lang}${suffix}`, url).toString();
}
