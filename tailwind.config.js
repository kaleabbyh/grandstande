/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#8B338A",
        gradientOne: "#9E589F",
        gradientTwo: "#84A6D4",
        customGreen: "#78C8EB",
      },
    },
  },
  plugins: [],
};
