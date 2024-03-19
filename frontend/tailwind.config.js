/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
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
        'theme-dark-text': '#0e0e10',
        'button-green': '#16a34a',
        'button-green-border': '#15803d',
        'button-red': '#dc2626',
        'button-red-border': '#b91c1c'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
        const newUtilities = {
            '.box': {
                '@apply w-full bg-white pr-10 pb-10 pl-10 pt-6 rounded-lg shadow-md': {},
            },
            '.alert-info': {
                '@apply flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800': {},
            },
            '.alert-danger': {
                '@apply flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800': {}
            },
            '.alert-success': {
                '@apply flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800': {}
            },
            '.alert-warning': {
                '@apply flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800': {}
            },
            '.alert-default': {
                '@apply flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600': {}
            },
            '.alert-icon': {
                '@apply flex-shrink-0 inline w-4 h-4 me-3': {}
            },
            '.alert': {
                '@apply absolute z-50 top-7 left-1/2 transform -translate-x-1/2': {}
            }
        };
        
        addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('flowbite/plugin')
  ],
}

