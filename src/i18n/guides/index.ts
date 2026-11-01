import type { GuideLocale, GuideSet } from './types';
import { guidesEs } from './es';
import { guidesEn } from './en';
import { guidesFr } from './fr';
import { guidesDe } from './de';
import { guidesCa } from './ca';

export type { GuideLocale, GuideSet, GuideDoc, GuideSection } from './types';

// Mantener sincronizado con PARTIAL_LANGS en functions/_middleware.js
export const GUIDE_LOCALES: GuideLocale[] = ['es', 'en', 'fr', 'de', 'ca'];
export const GUIDE_NON_DEFAULT: GuideLocale[] = ['en', 'fr', 'de', 'ca'];

export const guides: Record<GuideLocale, GuideSet> = {
  es: guidesEs, en: guidesEn, fr: guidesFr, de: guidesDe, ca: guidesCa,
};

export type GuideKey = 'queVer' | 'aparcar' | 'tempsDeFlors' | 'houseZona';

// Rutas sin prefijo de idioma (slugs en castellano en todos los idiomas)
export const GUIDE_PAGES: Record<GuideKey, { path: string; related: string[]; image: string; ogImage: string }> = {
  queVer: { path: '/guia/que-ver-en-girona', related: ['romani', 'lavanda', 'ylang-ylang'], image: '/images/guias/girona-1600.jpg', ogImage: '/images/guias/og-girona.jpg' },
  aparcar: { path: '/guia/aparcar-en-girona', related: ['bergamota', 'arbol-de-te', 'geranio'], image: '/images/guias/girona-1600.jpg', ogImage: '/images/guias/og-girona.jpg' },
  tempsDeFlors: { path: '/guia/temps-de-flors', related: ['lavanda', 'romani', 'bergamota'], image: '/images/guias/girona-1600.jpg', ogImage: '/images/guias/og-girona.jpg' },
  houseZona: { path: '/house/zona', related: [], image: '/images/aromatik-house/dron/dron-2.jpg', ogImage: '/images/aromatik-house/og-house.jpg' },
};

export const GIRONA_GUIDE_SLUGS: Record<string, Exclude<GuideKey, 'houseZona'>> = {
  'que-ver-en-girona': 'queVer',
  'aparcar-en-girona': 'aparcar',
  'temps-de-flors': 'tempsDeFlors',
};

export const APARTMENT_CARDS: Record<string, { name: string; nameCa: string; guests: number }> = {
  'ylang-ylang': { name: 'Ylang-Ylang', nameCa: 'Ylang-Ylang', guests: 4 },
  romani: { name: 'Romaní', nameCa: 'Romaní', guests: 2 },
  cipres: { name: 'Ciprés', nameCa: 'Xiprer', guests: 2 },
  lavanda: { name: 'Lavanda', nameCa: 'Lavanda', guests: 2 },
  limon: { name: 'Limón', nameCa: 'Llimona', guests: 2 },
  bergamota: { name: 'Bergamota', nameCa: 'Bergamota', guests: 6 },
  'arbol-de-te': { name: 'Árbol de té', nameCa: 'Arbre de te', guests: 6 },
  geranio: { name: 'Geranio', nameCa: 'Gerani', guests: 2 },
};

export function isGuideLocale(lang: string): lang is GuideLocale {
  return (GUIDE_LOCALES as string[]).includes(lang);
}

/** Prefijo de idioma para enlazar a una guía: los idiomas sin guía van a la inglesa. */
export function guideLangRoot(lang: string): string {
  if (lang === 'es') return '';
  return isGuideLocale(lang) ? '/' + lang : '/en';
}

/** Textos de interfaz de las guías para cualquier idioma de la web (fallback inglés). */
export function guideUi(lang: string) {
  return guides[isGuideLocale(lang) ? lang : 'en'].ui;
}

/** Divide un texto con enlaces [texto](/ruta) en trozos, añadiendo el prefijo de idioma. */
export function richText(text: string, langRoot: string): { text: string; href?: string }[] {
  const out: { text: string; href?: string }[] = [];
  const re = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push({ text: text.slice(last, m.index) });
    out.push({ text: m[1], href: langRoot + m[2] });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ text: text.slice(last) });
  return out;
}
