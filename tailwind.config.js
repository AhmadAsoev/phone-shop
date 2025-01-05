/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      dropShadow: {
        'custom': '0 0 100px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}