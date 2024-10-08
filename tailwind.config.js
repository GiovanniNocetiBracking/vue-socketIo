/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--textPrimaryColor)',
      },
    },
  },
  plugins: [],
};
