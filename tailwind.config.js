/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        'contactWidth': '88dvw',
        'contactHeight': '60dvw',
        'leftWidth': '31.875%',
        'leftHeight': '58.5%',
        'rightWidth': '52.5%',
        'rightHeight': '58.5%',
      }
    },
    colors: {
      'gold': '#FFBD59'
    },
  },
  plugins: [],
}

