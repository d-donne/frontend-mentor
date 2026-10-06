/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  purge: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      cyan: "hsl(179, 62%, 43%)",
      "bright-yellow": "hsl(71, 73%, 54%)",
      "light-gray": "hsl(204, 43%, 93%)",
      "grayish-blue": "hsl(218, 22%, 67%)",
      white: "white",
      red: "red",
      "light-cyan": "hsl(179, 62%, 43%, 75%)",
    },
    fontFamily: {
      "ff-primary": ["Karla", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

