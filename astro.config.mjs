import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aromatik.apartments',
  integrations: [
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca', 'fr', 'de', 'zh', 'ko', 'pt', 'nl'],
    routing: { prefixDefaultLocale: false }
  }
});
