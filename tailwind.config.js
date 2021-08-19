// eslint-disable
// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/**/*.vue",
    "./src/**/*.css",
    "./src/**/*.scss",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          default: "#00a8e9",
          50: "#e8f9ff",
          100: "#b9ecff",
          200: "#8bdfff",
          300: "#5dd2ff",
          400: "#2ec5ff",
          500: "#00b8ff", // primary
          600: "#0096d1",
          700: "#0075a2",
          800: "#005474",
          900: "#003246",
        }
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
}
