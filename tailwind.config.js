const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg-color": "var(--primary-bg-color)",
        "secondary-bg-color": "var(--secondary-bg-color)",

        "primary-font-color": "var(--primary-font-color)",
        "contrast-font-color": "var(--contrast-font-color)",
        "dimmed-font-color": "var(--dimmed-font-color)",
      },
    },
    fontFamily: {
      sans: ["Gabarito", "sans-serif"],
    },
    buttons: {
      variants: {
        filled: {
          transparent: {
            background: "bg-transparent",
            color: "var(--primary-font-color)",
            shadow: "shadow-md shadow-red-500/20",
            hover: "hover:shadow-lg hover:shadow-red-500/40",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
          },
        },
      },
    },
  },
  plugins: [],
});
