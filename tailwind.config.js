/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9D0AFF",
          secondary:"#845AFF",
          green:"#00F59B",
          newtral:"rgba(255, 250, 255, 0.1)"
        },
      },
      
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
