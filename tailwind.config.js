const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        yelow: {
            plena: "#DFB657"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-filters")],
};
