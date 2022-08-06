/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        first : '#313336',
        second : '#a1aab5'
      }
    },
  },
  plugins: [],
}
