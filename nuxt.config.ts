// nuxt.config.ts
import { serviceAreas } from './data/areas'

export default defineNuxtConfig({
  // Enable SSR + static output
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/areas', ...serviceAreas.map(a => `/areas/${a.slug}`)]
    }
  },

  // <head> config for “Your Electrician”
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Your Electrician | Electrical Services in Minneapolis, MN',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.'
        },
        { name: 'robots', content: 'index, follow' },

        /* Open Graph */
        { property: 'og:title',       content: 'Your Electrician | Electrical Services in Minneapolis, MN' },
        { property: 'og:description', content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.' },
        { property: 'og:image',       content: 'https://yourelectrician.co/social-preview.png' },
        { property: 'og:url',         content: 'https://yourelectrician.co/' },
        { property: 'og:type',        content: 'website' },

        /* Twitter */
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Your Electrician | Electrical Services in Minneapolis, MN' },
        { name: 'twitter:description', content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.' },
        { name: 'twitter:image',       content: 'https://yourelectrician.co/social-preview.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Russo+One&display=swap' }
      ],
      script: [
        /* Plausible Analytics */
        {
          src: 'https://plausible.io/js/script.exclusions.js',
          defer: true,
          'data-domain': 'yourelectrician.co',
          'data-exclude': '/wp-admin/*,/wp-login.php,/wp-content/*,/wp-includes/*,/wp-config.php,/xmlrpc.php,/wordpress/*,/phpmyadmin/*,/pma/*,/myadmin/*,/administrator/*,/admin.php,/.env,/.env.*,/.git/*,/.aws/*,/.ssh/*,/.htaccess,/shell.php,/cmd.php,/eval.php,/cgi-bin/*'
        }
      ],
    }
  },
  image: {
    provider: 'ipx',
    quality: 75,
    screens: { xs: 480, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 },
    formats: "webp"
  },
  css: ['~/assets/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.js'
  },

  site: {
    url:  'https://yourelectrician.co',
    name: 'your-electrician',
    // Netlify serves pages at trailing-slash URLs; sitemap entries must match.
    trailingSlash: true
  },

  sitemap: {
    // Post-submit page: noindex, never worth listing.
    exclude: ['/thank-you', '/thank-you/']
  },

  runtimeConfig: {
    public: {
      // Per-client GTM container. Set NUXT_PUBLIC_GTM_ID on Netlify; blank = no tag loads.
      gtmId: process.env.NUXT_PUBLIC_GTM_ID || ''
    }
  },

  // Compatibility date
  compatibilityDate: '2025-04-10'
})
