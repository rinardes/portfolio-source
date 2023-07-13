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
      fontSize: {
        h1: "clamp(2rem, -0.125rem + 10vw, 3.75rem)",
        h2: "0.875rem",
        profession: "clamp(1.625rem, 8vw - 2px, 3rem)",
        p: "1rem",
        label: "0.75rem",
        input: "0.875rem",
      },
      boxShadow: {
        main: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        inner:
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
        hover: "inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225",
      },
      backgroundImage: {
        linear: "linear-gradient(145deg, #1e2024, #23272b)",
        hover: "linear-gradient(145deg, #212428, #16181c);",
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
