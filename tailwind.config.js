/** @type {import('tailwindcss').Config} */
export const content = [
  './components/**/*.{vue,js,ts}',
  './layouts/**/*.{vue,js,ts}',
  './pages/**/*.{vue,js,ts}',
  './nuxt.config.{js,ts}',
]
export const theme = {
  extend: {
    colors: {
      'brand-dark': '#1f2937', // dark slate
      'brand-orange': '#f38b2a', // accent / CTA
      'brand-light': '#f4f5f7', // light-grey header/footer
    },
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
}
export const plugins = [
  require('tailwindcss/plugin')(function ({addBase, theme}) {
    addBase({
      html: {
        fontFamily: theme('fontFamily.body'),
        color: theme('colors.brand-dark'),
        background: theme('colors.brand-light'),
      },
      'h1,h2,h3,h4,h5,h6': {
        fontFamily: theme('fontFamily.heading'),
        color: theme('colors.brand-dark'),
      },
      a: {color: theme('colors.brand-dark')},
      'a:hover': {color: theme('colors.brand-orange')},
    })
  }),
]
