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
        text: {
          default: '#242424', // Default text color
          secondary: '#595959', // Secondary text color
          subdued: '#A4A6A6', // Subdued text color
          disabled: '#C7C3C3', // Disabled text color
          hovered: '#4A4A4A', // Hovered text color
          success: '#008F51',
          warning: '#D99C00',
          highlight: '#0B7D8E',
          critical: '#911812',
        },
        background: {
          default: '#FAFAFA', // Default background color
          subdued: '#F2F2F2', // Subdued background color
          disabled: '#DBD9D9',
        },
        border: {
          default: '#FFF',
          hovered: '#DBD9D9',
          subdued: '#E5E4E4',
          disabled: '#E5E4E4',
        },
        surface: {
          // default: "",
          hovered: '#DBD9D9',
          subdued: '#F2F0F0', // Subdued surface color
          disabled: '#FAFAFA', // Disabled state of surface color
        },
      },
      fontFamily: {
        raleway: 'var(--raleway)',
        'libre-caslon': 'var(--libre-caslon)',
      },
      keyframes: {
        shimmers: {
          '0%': { backgroundPosition: '200% -10%' },
          '100%': { backgroundPosition: '10% 200%' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },

      animation: {
        shimmers: 'shimmers 1.7s infinite linear forwards',
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
