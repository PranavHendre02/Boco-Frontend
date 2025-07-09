/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors :{
        "purple":"#140152",
        "light-purple":"#E9E1FB",
        "light-pink":"#D3C3F8",
        "light-gray":"#666287",
        "light-blue":"#140152",
      },
    },
  },
  plugins: [],
}

