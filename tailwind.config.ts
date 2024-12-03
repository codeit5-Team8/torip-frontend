import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#19D1CB',
        secondary: '#000000',
        mint: {
          50: '#F3FCFC',
          100: '#E6F9F9',
          200: '#BFF3F3',
          300: '#9AEEEF',
          400: '#5BE1DD',
          500: '#28D7D2',
          600: '#19D1CB',
          700: '#20ACAC',
          800: '#1C8787',
          900: '#156565',
          950: '#115A5A',
        },
        warning: '#B91C1C',
      },
      boxShadow: {
        base: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        tablet: '640px',
        desktop: '1024px',
      },
    },
  },
  plugins: [],
} satisfies Config;
