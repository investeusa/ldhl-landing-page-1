/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: colors.white,
      primary: "#5A887C",
      secundary: "#B54C47",
      green: colors.green,
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
    },
    fontFamily: {
      title: ["Roboto", "sans-serif"],
      primary: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
