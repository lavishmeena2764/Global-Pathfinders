/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        medBlue: {
          50: "#f3fafd",
          100: "#9ddaf2",
          200: "#1c9bcd",
        },
        medGreen: {
          100: "#b4d479",
          200: "#94c23f",
          300: "#779c32",
        },
      },
    },
  },
  plugins: [],
};

