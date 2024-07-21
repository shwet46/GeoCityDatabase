/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        email : ["Chivo Mono", "sans-serif"],
        reg : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

