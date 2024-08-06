const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/*.{jsx,tsx,js,ts}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      animation: {
        beka: "beka 0.35s ease-out forwards",
        avto: "avto 1.2s ease-in-out forwards",
      },
      keyframes: {
        beka: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        avto: {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
    fontFamily: {
      glaho: ["BPG Glaho", "sans-serif"],
      rexbold: ["Alk Rex Bold", "sans-serif"],
    },
  },
  plugins: [flowbite.plugin()],
};
