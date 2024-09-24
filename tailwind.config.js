/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chronotype: ['chronotype', 'sans-serif'],
      },
      boxShadow: {
        'dollafade': '2px 1px 6px black', // Example custom shadow
      },

    },
  },
  plugins: [],
}