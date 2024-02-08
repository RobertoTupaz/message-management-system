/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#00A9FF",
      secodary: "#89CFF3",
      tertiary: "#A0E9FF",
      quartenary : "#CDF5FD",
      }, 
    },
  },
  plugins: [],
}