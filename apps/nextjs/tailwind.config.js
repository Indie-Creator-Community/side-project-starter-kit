/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  presets: [require('../../tailwind.config')],
};
