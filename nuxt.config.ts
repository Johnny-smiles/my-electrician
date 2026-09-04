// nuxt.config.ts
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { serviceAreas } from './data/areas'

const SITE_URL = 'https://yourelectrician.co'

/** Absolute public URL for a file in /public (no query params — image sitemap locs must be fetchable as-is). */
const asset = (path: string): string => `${SITE_URL}/${path.replace(/^\/+/, '')}`

/** Every image in public/recent, read at config time so the gallery sitemap entry never goes stale. */
const recentWorkImages: string[] = readdirSync(fileURLToPath(new URL('./public/recent', import.meta.url)))
  .filter((f: string): boolean => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
  .sort()
  .map((f: string): string => asset(`recent/${f}`))

/**
 * Explicit <image:image> entries, merged into the auto-generated page entries.
 * @nuxtjs/sitemap 7.4.3 dedupes every source by `_key` (= loc without trailing
 * slash, see dist/runtime/server/sitemap/urlset/normalise.js) and merges the
 * matches with a defu that unions arrays (dist/runtime/utils-pure.js `merger`),
 * so `sitemap.urls` ADDS images to the nuxt:pages entries rather than
 * duplicating <url> blocks — provided the loc matches (trailing slash).
 */
const sitemapImages: { loc: string, images: { loc: string }[] }[] = [
  { path: '/',                          images: ['hero.png'] },
  { path: '/about/',                    images: ['aboutFamily.jpeg'] },
  { path: '/commercial-lighting/',      images: ['commercialLighting.png'] },
  { path: '/ev-charger-installation/',  images: ['EVCharger.png'] },
  { path: '/home-builds/',              images: ['homeBuilds.png'] },
  { path: '/home-remodeling/',          images: ['residentalRemodel.png'] },
  { path: '/recent-work/',              images: ['recentProjectsHero.png'] }
].map((entry): { loc: string, images: { loc: string }[] } => ({
  loc: asset(entry.path === '/' ? '' : entry.path),
  images: [
    ...entry.images.map((f: string): string => asset(f)),
    ...(entry.path === '/recent-work/' ? recentWorkImages : [])
  ].map((loc: string): { loc: string } => ({ loc }))
}))

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
        { property: 'og:image',        content: asset('social-preview.png') },
        { property: 'og:image:width',  content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt',    content: 'Your Electrician — licensed electrical services in the Minneapolis–St Paul metro' },
        { property: 'og:url',          content: asset('') },
        { property: 'og:type',         content: 'website' },
        { property: 'og:site_name',    content: 'Your Electrician' },
        { property: 'og:locale',       content: 'en_US' },

        /* Twitter */
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Your Electrician | Electrical Services in Minneapolis, MN' },
        { name: 'twitter:description', content: 'Your Electrician provides licensed, bonded and insured electrical services for homes and businesses across the Minneapolis–St Paul metro area.' },
        { name: 'twitter:image',       content: asset('social-preview.png') }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Single request for every family assets/main.css actually declares:
        // Inter (body), Montserrat (headings), Russo One (logo/hero wordmark).
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@700&family=Russo+One&display=swap'
        }
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
    // `formats` is not a @nuxt/image option — it was silently ignored, so no
    // webp was ever produced. The real key is `format` (array).
    // `densities` already defaults to [1, 2], so it is left unset.
    format: ['webp']
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
    url:  SITE_URL,
    name: 'your-electrician',
    // Netlify serves pages at trailing-slash URLs; sitemap entries must match.
    trailingSlash: true
  },

  sitemap: {
    // Post-submit page: noindex, never worth listing.
    exclude: ['/thank-you', '/thank-you/'],
    // Prerender-time image discovery emitted double-encoded /_ipx/ URLs
    // (&amp;amp; -> 404), 10x10 blur placeholders, and a spurious trailing
    // slash on file locs. Curated entries below replace it.
    discoverImages: false,
    urls: sitemapImages
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
