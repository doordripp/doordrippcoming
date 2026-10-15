
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        charcoal: {
          DEFAULT: '#0D0D10',
          muted: '#18181B',
          light: '#27272A',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#E8D288',
          pale: '#F3ECD6',
          dark: '#9A7B1C',
        },
        ivory: '#F7F6F2',
        bone: '#ECEBE4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-xl': '0.35em',
        'widest-2xl': '0.5em',
      },
      boxShadow: {
        'luxury': '0 25px 60px -15px rgba(0, 0, 0, 0.9)',
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
