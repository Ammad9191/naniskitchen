/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8ED',
        ivory: '#F8F0E3',
        brown: {
          dark: '#3B1F12',
          rich: '#5A2E1B',
          muted: '#7A4A32',
        },
        leaf: {
          DEFAULT: '#128C4A',
          dark: '#0E6E3A',
          olive: '#536B2F',
        },
        gold: {
          DEFAULT: '#E8A126',
          soft: '#F3D39A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        card: '0 12px 32px rgba(59, 31, 18, 0.08)',
        soft: '0 8px 24px rgba(59, 31, 18, 0.06)',
        header: '0 8px 20px rgba(59, 31, 18, 0.08)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
};
