/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        main: "#2E0249",
        second: "#A91079",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      width: {
        fixw: "150px",
      },
    },
  },
  plugins: [],
};
