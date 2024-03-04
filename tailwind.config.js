/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'translate':'#212936cc',
        'translated':'#121826cc',
        'text-content':'#F9FAFB'
      }
    },
  },
  plugins: [],
}

