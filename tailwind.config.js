module.exports = {
  content: ["./src/**/{*.ejs,*.html,main.js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors : {
        primary : {
          100: "#fff3e6",
          200: "#ffdbb3",
          300: "#fec380",
          400: "#feab4d",
          500: "#fe931a",
          600: "#e57901",
        }
      }
    },
  },
  plugins: [
  ],
}
