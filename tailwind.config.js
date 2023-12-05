/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#a40434",
        customRedGradient: "#ef5350",
        ...defaultTheme.colors,
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};

