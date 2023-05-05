/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [''],
  theme: {
    extend: {},
  },
  presets: [require('./node_modules/side-ui/dist/tailwind.config')],
  plugins: [require('tailwindcss-scrollbar')],
};
