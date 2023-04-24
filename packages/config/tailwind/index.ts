import type { Config } from 'tailwindcss';

export default {
  content: [''],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-scrollbar')],
} satisfies Config;
