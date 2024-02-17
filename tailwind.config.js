/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none'
        },
        '.no-scrollbar': {
            '-ms-overflow-style': 'none', 
            'scrollbar-width': 'none'  
        }
      })
    })
  ],
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3'
  ]
}

