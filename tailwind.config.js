/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        "custom-pink": "#FF52C1",
      },
      boxShadow: {
        "custom-pink": "0px 0px 9px 0px rgba(255, 82, 193, 0.22)",
      },
      dropShadow: {
        custom: "0px 6px 13px rgba(0, 37, 46, 0.22)",
      },
    },
  },
  plugins: [],
};
