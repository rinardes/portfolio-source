/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        "neutral-800": "#1A1B1E",
        error: colors.red,
        background: "#000B0F",
        onBackground: "#000F14",
        border: "#2E364F",
        borderOnbackground: "#00171F",
        container: "#161A2C",
        paragraph: "#96a1c0",
      },
      spacing: {
        "full-h": "100dvh",
      },
    },
    fontFamily: {
      primary: "'Roboto Mono', sans-serif;",
      secondary: "'Poppins', sans-serif;",
    },
  },
  plugins: [],
};
