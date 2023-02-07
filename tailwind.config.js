/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundOpacity: ['active']
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0FCFEC",

          "secondary": "#19D3AE",

          "accent": "#3A4256",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#F63E7B",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
