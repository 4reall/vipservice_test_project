/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#5C87DB",
          dark: "#3E67B7",
        },
        second: {
          main: "#8BA5D8",
          light: "#DDE3EE",
        },
        text: {
          main: "#5C5C5C",
          light: "#FFF",
        },
        gray: "#B7BAC1",
      },
      boxShadow: {
        input: "0 0 2px rgba(92, 135, 219, 0.5)",
        widget: "0px 0px 14px rgba(112, 121, 153, 0.3);",
      },
    },
  },
  plugins: [],
};
