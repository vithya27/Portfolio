/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-blue": "#0a192f",
        "font-blue": "#ccd6f6",
        "highlight-blue": "#64ffd9",
        "muted-blue": "#8892b0",
        "line-blue": "#1f2f4d",
      },
    },
  },
  plugins: [],
};
