/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  presets: [require('./node_modules/side-ui/dist/tailwind.config')],
  theme: {
    extend: {
      animationDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      animationDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        '3s': '3s',
        '5s': '5s',
        '10s': '10s',
        '15s': '15s',
        '20s': '20s',
      },
      fontSize: {
        'fluid-base': 'clamp(0.75rem, 2vw, 1rem)',
        'fluid-lg': 'clamp(1rem, 4vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 6vw, 2.5rem)',
        'fluid-2xl': 'clamp(2rem, 9vw, 3.5rem)',
      },
      screens: {
        '3xs': '240px',
        '2xs': '360px',
        xs: '480px',
      },
    },
  },

  plugins: [require('tailwindcss-scrollbar'), require('tailwindcss-animated')],
};
