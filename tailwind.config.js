/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        milkwhite: ["Milk White Regular", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#1f191a",
          100: "#ae9c96",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
