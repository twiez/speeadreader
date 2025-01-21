/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#B85EE6',
          pink: '#FF6B9D'
        },
        dark: {
          900: '#0A0A0B',
          800: '#1A1A1B',
          700: '#2A2A2B'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};