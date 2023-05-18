/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/rick-and-morty.png')"
      },
      colors: {
        'green-300': '#BDFFA9',
        'yellow-300': '#F0E14B',
        'blue-100': '#C5EAEC',
        'gray-700': '#3C403B',
        'gray-900': '#242623',
        'pink-300': '#DB4C82'
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}
