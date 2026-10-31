import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aromatik.apartments',
  integrations: [
    sitemap({
      // The 404 page is a real route for Astro but must never be listed;
      // /llegada/ are private arrival guides sent to guests by Smoobu
      filter: (page) => !/\/404\/?$/.test(page) && !/\/llegada\//.test(page),
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ca', 'fr', 'de', 'zh', 'ko', 'pt', 'nl'],
    routing: { prefixDefaultLocale: false }
  }
});
