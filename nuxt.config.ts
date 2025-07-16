// nuxt.config.ts
export default defineNuxtConfig({
  // Enable SSR + static output
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // <head> config for “Your Electrician”
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Your Electrician — Residential & Commercial Electrical Services in Minneapolis–St Paul, MN',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.'
        },
        { name: 'robots', content: 'index, follow' },

        /* Open Graph */
        { property: 'og:title',       content: 'Your Electrician — Residential & Commercial Electrical Services in Minneapolis–St Paul, MN' },
        { property: 'og:description', content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.' },
        { property: 'og:image',       content: 'https://yourelectrician.co/social-preview.png' },
        { property: 'og:url',         content: 'https://yourelectrician.co' },
        { property: 'og:type',        content: 'website' },

        /* Twitter */
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Your Electrician — Residential & Commercial Electrical Services in Minneapolis–St Paul, MN' },
        { name: 'twitter:description', content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.' },
        { name: 'twitter:image',       content: 'https://yourelectrician.co/social-preview.png' }
      ],
      link: [
        // { rel: 'icon',                 type: 'image/png', href: '/favicon.png' },
        // { rel: 'apple-touch-icon',                              href: '/apple-touch-icon.png' },
        // { rel: 'apple-touch-icon-precomposed',                  href: '/apple-touch-icon-precomposed.png' },
        { rel: 'canonical',                                     href: 'https://yourelectrician.co' },
        { rel: 'stylesheet',                                    href: 'https://fonts.googleapis.com/css2?family=Russo+One&display=swap' }

      ],
      script: [
        /* Plausible Analytics */
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'yourelectrician.co'
        },
        /* Google Analytics (v4) */
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true },
        {
          type: 'text/javascript',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }
      ],
    }
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
    name: 'your-electrician'
    // Add more options here as needed (e.g., exclude, routes, etc.)
  },

  // Compatibility date
  compatibilityDate: '2025-04-10'
})
