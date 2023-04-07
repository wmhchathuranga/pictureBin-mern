/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightGreen:"hsl(140, 63%, 51%)"
      }
    },
  },
  plugins: [],
}

