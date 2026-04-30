/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4b6343",
        secondary: "#f5f5f0",
        accent: "#8ba888",
        foreground: "#1a1a1a",
        background: "#ffffff",
      },
    },
  },
  plugins: [],
}
