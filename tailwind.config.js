/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [''],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Oxygen-Sans"',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Fira Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      colors: {
        primary: {
          50: '#FEFFD6',
          100: '#FEFFAD',
          200: '#FDFF85',
          300: '#FCFF5C',
          400: '#FCFF33',
          500: '#FAFF00',
          600: '#DDE000',
          700: '#B5B800',
          800: '#8C8F00',
          900: '#646600',
          950: '#3C3D00',
        },
        secondary: {
          50: '#ECEDFD',
          100: '#C7C8FA',
          200: '#A1A3F7',
          300: '#7C7EF4',
          400: '#6366F1',
          500: '#4346EF',
          600: '#1E21EB',
          700: '#1215CE',
          800: '#0F11A9',
          900: '#0B0D83',
          950: '#080A5E',
        },
      },
    },
  },
  plugins: [require('tailwindcss-scrollbar')],
};
