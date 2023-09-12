/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'], // You can customize the font name ('poppins') and fallback fonts ('sans') as needed.
      },
    },
  },
  plugins: [],
}