/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azulito: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0a84ff",
          600: "#0a84ff",
          700: "#0951e0",
          800: "#0647b6",
          900: "#002855",
        },
      },
    },
  },
  plugins: [],
};
