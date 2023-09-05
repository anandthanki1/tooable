/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#d3d3d3',
        'light-white': '#FFFFF7',
      },
    },
  },
  plugins: [],
}
