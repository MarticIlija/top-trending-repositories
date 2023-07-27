/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    boxShadow: ["active"],
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
