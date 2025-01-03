import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constant/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#19D1CB',
        secondary: '#000000',
        mint: {
          '50': '#F3FCFC',
          '100': '#E6F9F9',
          '200': '#BFF3F3',
          '300': '#9AEEEF',
          '400': '#5BE1DD',
          '500': '#28D7D2',
          '600': '#19D1CB',
          '700': '#20ACAC',
          '800': '#1C8787',
          '900': '#156565',
          '950': '#115A5A',
        },
        warning: '#FF334B',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        base: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        tablet: '640px',
        desktop: '1280px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          tablet: '1.5rem',
        },
        screens: {
          DEFAULT: '100%',
          tablet: '100%',
          desktop: '1280px',
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
