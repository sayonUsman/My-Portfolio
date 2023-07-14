/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkModel: "media",
  theme: {
    extend: {
      fontFamily: {
        belano: ["Belanosima"],
        rale: ["Raleway"],
      },
    },
  },
  plugins: [require("daisyui")],
};
