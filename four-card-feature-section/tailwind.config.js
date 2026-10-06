/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 46px -3px hsl(217, 45%, 90%)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: "hsl(0, 78%, 62%)",
      cyan: "hsl(180, 62%, 55%)",
      orange: "hsl(34, 97%, 64%)",
      blue: "hsl(212, 86%, 64%)",
      "font-accent": "hsl(234, 12%, 34%)",
      "font-primary": "hsl(229, 6%, 66%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      green: "green",
    },
    fontFamily: {
      "ff-primary": ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
