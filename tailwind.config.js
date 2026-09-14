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
      'brand-dark': '#182b38',   // dark slate — body text / headings
      'brand-orange': '#b94e15', // accent / CTA
      'brand-light': '#faf9f6',  // light-grey header/footer
      'brand-sand': '#f3f0e9',   // warm cream section background (tints the orange accent)
      'brand-brown': '#7c4a1d',  // deep warm brown — dividers / muted accents
    },
    fontFamily: {
      heading: ['Inter', 'sans-serif'],
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
