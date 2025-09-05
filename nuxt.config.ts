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
        { rel: 'canonical',  href: 'https://yourelectrician.co' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Russo+One&display=swap' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Russo+One&display=swap' }
      ],
      script: [
        /* Plausible Analytics */
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'yourelectrician.co'
        },
        {
          type: 'text/javascript',
          innerHTML: `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),
            dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WH87J4BK');
    `
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
    name: 'your-electrician'
    // Add more options here as needed (e.g., exclude, routes, etc.)
  },

  // Compatibility date
  compatibilityDate: '2025-04-10'
})
