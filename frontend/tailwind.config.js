/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'custom-red': '#e8bcb9ff',
        'custom-brown': '#f39f5aff',
        'custom-redwood': '#ae445aff',
        'custom-purple': '#662549ff',
        'custom-violet': '#451955ff',
        'custom-dark-blue': '#1d1a39ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

