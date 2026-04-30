/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D2B11", // Deep Forest Green
        secondary: "#F7F9F6", // Light Mint Background
        accent: "#A3E635", // Lime Green
        muted: "#4D5E40", // Subtle Green Text
        foreground: "#1D2B11",
        background: "#FFFFFF",
        border: "#E2E8F0",
      },
    },
  },
  plugins: [],
}
