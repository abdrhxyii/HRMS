/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-100': '#f3e8ff', // Light purple background
        'purple-600': '#6b46c1', // Button color
        'purple-700': '#553c9a', // Button hover color
      },
      height: {
        'height-600': '600px'
      },
      width: {
        'width-520': '520px'
      }
    },
  },
  plugins: [],
}