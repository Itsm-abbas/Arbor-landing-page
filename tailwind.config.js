/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgreen: {
          light: "#52C48D",
        },
        lightblue: {
          light: "#00B2FF",
        },
        lightyellow: {
          light: "#FFC83A",
        },
        lightgreen2: {
          light: "#18AC00",
        },
      },
      backgroundImage: {
        "main-img": "url('/main_img.png')",
      },
      fontFamily: {
        sifonn: ["Sifonn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
