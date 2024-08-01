/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fig-main': "url('src/assets/bg-fig-main.png')",
      }
    },
  },
  plugins: [],
}

