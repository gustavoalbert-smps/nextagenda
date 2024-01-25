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
        'theme-light-red': '#e8bcb9ff',
        'theme-yellow': '#f39f5aff',
        'theme-redwood': '#ae445aff',
        'theme-purple': '#662549ff',
        'theme-violet': '#451955ff',
        'theme-dark-blue': '#1d1a39ff',
        'theme-light-blue': '#56547dff',
        'theme-dark-text': '#0e0e10'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

