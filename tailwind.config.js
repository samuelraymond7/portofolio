/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        react: "#087ea4",
        vite: "#ffd028",
        tailwind: "#38bdf8",
        css: "#264de4",
        framer: "#bb4b96",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
