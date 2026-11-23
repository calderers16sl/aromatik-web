// Puntuaciones públicas de Aromatik Apartments, escritas a mano.
// Comprobadas en cada plataforma el 23 nov 2026. Al actualizarlas, cambiar también CHECKED.
// Las usan GuestRatings.astro (bloque de valoraciones) y HostCard.astro (ficha del anfitrión).

export const RATINGS_CHECKED = { year: 2026, month: 11 };

export interface PlatformRating {
  platform: string;
  score: number;      // nota media
  scale: 5 | 10;      // sobre cuánto puntúa la plataforma
  decimals: number;
  count: number;      // número de reseñas
  url: string;
}

export const RATINGS: PlatformRating[] = [
  { platform: 'Airbnb', score: 4.71, scale: 5, decimals: 2, count: 2495, url: 'https://www.airbnb.es/users/show/1469972322678354410' },
  { platform: 'Google', score: 4.6, scale: 5, decimals: 1, count: 74, url: 'https://www.google.com/maps/search/Aromatik+Apartments+Girona' },
  { platform: 'Booking.com', score: 8.4, scale: 10, decimals: 1, count: 122, url: 'https://www.booking.com/hotel/es/aromatik-apartments.html' },
];

// Años como anfitrión en Airbnb (perfil de Arnau).
export const HOST_YEARS = 5;

export function fmtScore(lang: string, r: PlatformRating): string {
  return new Intl.NumberFormat(lang, { minimumFractionDigits: r.decimals, maximumFractionDigits: r.decimals }).format(r.score);
}
export function fmtCount(lang: string, n: number): string {
  return new Intl.NumberFormat(lang, { useGrouping: 'always' } as Intl.NumberFormatOptions).format(n);
}
