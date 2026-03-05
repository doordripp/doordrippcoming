
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
          dark: '#B4941F',
        },
        black: {
          DEFAULT: '#000000',
          rich: '#050505',
          glass: 'rgba(0, 0, 0, 0.8)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(to bottom, #000000, #111111)',
      }
    },
  },
  plugins: [],
}
