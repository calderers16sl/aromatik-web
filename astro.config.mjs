import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aromatik.apartments',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca', 'fr', 'de'],
    routing: { prefixDefaultLocale: false }
  }
});
