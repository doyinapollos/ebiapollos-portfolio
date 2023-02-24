/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
      },
      spacing: {
        is01px: '1px',
        529: '529px',
      },
      colors: {
        'portfolio-red': '#ED2025',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
