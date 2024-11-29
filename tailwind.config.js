const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "var(--background-color)",
        "font-color": "var(--font-color)",
      },
    },
    fontFamily: {
      sans: ["Gabarito", "sans-serif"],
    },
  },
  plugins: [],
});
