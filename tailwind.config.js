/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3352A0',
        secondary: '#7091E6',
        tertiary: '#8697C4',
        light: '#ADBBDA',
        background: '#EDE8F5',
      },
    },
  },
  plugins: [],
};