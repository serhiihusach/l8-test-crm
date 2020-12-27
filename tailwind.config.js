const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cerebri Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        indigo: {
          '900': '#091e38',
          '800': '#0f365f',
          '600': '#0661b3',
          '500': '#0574cd',
          '400': '#0886d7',
          '300': '#02b7ff',
          '100': '#06e8ff',
        },
      },
      boxShadow: theme => ({
        outline: '0 0 0 2px ' + theme('colors.indigo.500'),
      }),
      fill: theme => theme('colors'),
    },
  },
  variants: {
    fill: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'focus'],
  },
  plugins: [],
}
