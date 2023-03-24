/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"

  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Edu: ["Edu NSW ACT Foundation', cursive"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      },
    },
  },
  plugins: [],
}
