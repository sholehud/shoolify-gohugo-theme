module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        less: '#343434'
      },
      white: {
        less: '#EFEFEF',
        DEFAULT: '#FFFFFF'
      },
      blue: {
        less: '#ECF3FD',
        DEFAULT: '#1376FA',
        dark: '#1351FA',
      },
      green: {
        light: '#B4FEC1',
        DEFAULT: '#1DEB38',
        dark: '#074F10'
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        'v-xs': '375px'
      },
      minWidth: {
        'sm': '8rem'
      }
    },
  },
  variants: {
    extend: {
      margin: ['last', 'first'],
    },
  },
  plugins: [],
}
