/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'apple-gray': "#f5f5f7",
        'apple-secondary': "#fafafc",
      }
    },
  },
  plugins: [tailwindScrollbar],
};
