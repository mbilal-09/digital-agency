/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#2b6af3",
        secondary: "#5791e9",
        gray: "#a0a0a0",
        lightgray: "#e5e7eb",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
