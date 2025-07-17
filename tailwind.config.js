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
        sans: ["var(--font-bricolage)", "Bricolage Grotesque", "Bricolage Grotesque Placeholder", "sans-serif"],
        milkwhite: ["Milk White Regular", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#1f191a",
          100: "#ae9c96",
          200: "#f4f3f2",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
