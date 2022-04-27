module.exports = {
  content: [
    './public/index.html',
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        "primary": "#00ACDF",
        "primary-dark": "#0093C0",
        "primary-darker": "#002A52",
        "white-darkest": "#D6D6D6",
        "black": "#000",
        "grey": "#D1D1D6",
        "white": "#fff",
        "white-darker": "#F5F5F5",
        "primary-darkest": "#001427",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};