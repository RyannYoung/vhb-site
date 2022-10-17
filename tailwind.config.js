/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Staatliches", "cursive"],
        secondary: ["Poppins"],
        code: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
