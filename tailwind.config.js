/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './stories/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        lighten: '#FFF3EF',
        light: '#FFD9CC',
        main: '#CC3300',
        dark: '#A82A00',
        darken: '721D00',
      },
      black: '#333333',
      white: '#FFFFFF',
      gray: {
        main: '#F8F8F8',
        dark: '#F4F4F4',
        darken: '#E6E6E6',
      },
      grayline: {
        main: '#E0E0E0',
        dark: '#D1D1D1',
        darken: '#C1C1C1',
      },
      success: {
        lighten: '#EBFAEE',
        light: '#B0EDBC',
        main: '#249F28',
        dark: '#1E8821',
        darken: '#136015',
      },
      error: {
        lighten: '#FFEAEB',
        light: 'FFD3D5',
        main: '#FF0000',
        dark: 'DB0000',
        darken: 'B10000',
      },
      warn: {
        lighten: '#FFFCE9',
        light: 'FFF4AD',
        main: '#F27900',
        dark: 'DE6F00',
        darken: 'BA5D00',
      },
      info: {
        lighten: '#D9EEFF',
        light: '#A7D8FF',
        main: '#2196F3',
        dark: '1B80D1',
        darken: '0B5793',
      },
      other: {
        public: '#D5357F',
        nonpublic: '#648AC7',
        auction: '#8780D9',
        onsale: '#E6831F',
        designatedsale: '#D96400',
        new: '#F74A79',
      },
    },
    fontFamily: {
      sans: ['Noto Sans JP'],
      primary: ['Noto Sans JP'],
      secondary: ['Roboto'],
      mono: ['Roboto Mono'],
    },
    fontSize: {
      xs: '0.8571rem',
      sm: '0.9285rem',
      base: '1rem',
      lg: '1.0714rem',
      xl: '1.143rem',
      '2xl': '1.2857rem',
      '3xl': '1.4285rem',
      '4xl': '1.7142rem',
    },
  },
  plugins: [
    require('tailwindcss-radix')(),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '14px' },
      })
    }),
  ],
}
