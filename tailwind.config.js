/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontSize: {
        '40': '40px',
        '35': '35px',
        '30': '30px',
        '25': '25px',
        '20': '20px',
      },
      colors: {
        'color-select': '#010101',
        'color-fondo': '#1d1d1d',
        'color-main': '#0A4D68',
        'color-secundario' : '#088395',
        'tercer-color' : '#05BFDB',
        'color-claro': '#00FFCA'
      },
    },
  },
  plugins: [],
};
