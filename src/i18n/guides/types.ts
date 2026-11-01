// Guías SEO (Girona + zona de Aromatik House). Solo existen en estos idiomas;
// los demás (zh, ko, pt, nl) se redirigen a la versión inglesa en el middleware.
export type GuideLocale = 'es' | 'en' | 'fr' | 'de' | 'ca';

// Los textos admiten enlaces internos en formato [texto](/ruta). La ruta va
// SIN prefijo de idioma: el componente añade /en, /fr… según la página.
export interface GuideSection {
  h2: string;
  paragraphs?: string[];
  items?: { title: string; text: string }[];
}

export interface GuideDoc {
  metaTitle: string;        // ≤ 60 caracteres
  metaDescription: string;  // ≤ 155 caracteres
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: GuideSection[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface GuideIndexDoc {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  cards: Record<'queVer' | 'aparcar' | 'tempsDeFlors' | 'houseZona', { title: string; text: string }>;
  readMore: string;
}

export interface CyclingRoutes {
  eyebrow: string;
  h2: string;
  intro: string;
  routes: { title: string; text: string }[];
  note: string;
}

export interface GuideUi {
  home: string;
  guidesLabel: string;      // «Guía de Girona» (pie y migas)
  relatedTitle: string;     // «Apartamentos recomendados»
  upTo: string;             // «Hasta» (N personas)
  people: string;           // «personas»
  viewApartment: string;    // «Ver apartamento»
  contact: string;          // «Escríbenos»
  zoneLink: string;         // enlace desde /house a /house/zona
  girona: string;           // enlace desde la ficha de apartamento a qué ver
}

export interface GuideSet {
  ui: GuideUi;
  index: GuideIndexDoc;
  houseZona: GuideDoc;
  queVer: GuideDoc;
  aparcar: GuideDoc;
  tempsDeFlors: GuideDoc;
  cycling: CyclingRoutes;
}
