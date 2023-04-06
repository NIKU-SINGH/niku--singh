/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    // colors: {
    //   'purple': "#5939C6",
    // },
    fontFamily: {
      "Poppins" : ['Poppins'],
      "Pacifico": ['Pacifico'],
      "ProductSans" : ['PT Sans'],
      "OpenSans": ['Open Sans'],
    },
    darkMode: 'class',

  },
  plugins: [],
}
