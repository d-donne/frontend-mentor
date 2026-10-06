/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {},
    colors: {
      "desaturated-red": "hsl(0, 36%, 70%)",
      "soft-red": "hsl(0, 93%, 68%)",
      "dark-grayish-red": "hsl(0, 6%, 24%)",
    },
    fontFamily: {
      "ff-primary": ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
