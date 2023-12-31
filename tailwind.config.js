/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        neatly: ["Neucha", "Madasi", "sans-serif"],
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        "transparent-50": "transparent 50%",
        "bg-amber-200-50": "rgb(253 230 138) 50%",
        "bg-red-300-50": "rgb(252 165 165) 50%",
        "bg-lime-200-50": "rgb(217 249 157) 50%",
        "bg-fuchsia-300-50": "rgb(240 171 252) 50%",
        "bg-cyan-200-50": "rgb(165 243 252) 50%",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

