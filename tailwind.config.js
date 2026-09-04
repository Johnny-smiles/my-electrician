/** @type {import('tailwindcss').Config} */

export const content = [
  './components/**/*.{vue,js,ts}',
  './layouts/**/*.{vue,js,ts}',
  './pages/**/*.{vue,js,ts}',
  // app.vue and error.vue were not scanned, so utilities used only there
  // were purged from the build.
  './app.vue',
  './error.vue',
  './nuxt.config.{js,ts}',
]

export const theme = {
  extend: {
    colors: {
      'brand-dark': '#1f2937',   // dark slate — body text / headings
      'brand-orange': '#f38b2a', // accent / CTA
      'brand-light': '#f4f5f7',  // light-grey header/footer
      'brand-sand': '#fdf3e7',   // warm cream section background (tints the orange accent)
      'brand-brown': '#7c4a1d',  // deep warm brown — dividers / muted accents
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
}

// Base element styling (html/heading/link colours + fonts) lives in
// assets/main.css `@layer base` — the single source of truth. Do not
// re-declare it here via an addBase plugin; that duplicated every rule.
export const plugins = []

// @nuxtjs/tailwindcss imports this file's DEFAULT export. Without it the
// config resolved to `undefined` and no brand-* utilities were generated.
export default { content, theme, plugins }
