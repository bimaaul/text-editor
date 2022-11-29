/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/uikit/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "material-icon": ["Material Icons"],
    },
  },
  plugins: [],
}
