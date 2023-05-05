/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  presets: [require('./node_modules/side-ui/dist/tailwind.config')],
  plugins: [require('tailwindcss-scrollbar')],
};
