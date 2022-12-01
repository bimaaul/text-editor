/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/uikit/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "material-icon": ["Material Icons"],
        inter: ["Inter"],
      },
      colors: {
        active: "#1967d2",
        disabled: "#5f6368",
        activeBg: "#e8f0fe",
        blueGray: {
          700: "#334155"
        }
      },
    }
  },
  plugins: [],
}
