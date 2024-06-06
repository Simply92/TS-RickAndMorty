/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main": "url('/fondo.jpg')"
      },
      backgroundColor: {
        "antiquewhite": "rgb(250,325,215)",
        "green": "#2fdb04"
      }
    },
  },
  plugins: [],
}

