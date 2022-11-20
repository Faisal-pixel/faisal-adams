/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
      colors: {
        "badge": "#2f293ae8",
        "primary": "#211e25"
      },
      fontFamily: {
        burtons: "burtons"
      }

    },
  },
  plugins: [],
  
}
