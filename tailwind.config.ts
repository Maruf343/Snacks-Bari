import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        snack: '#ff6a00',
        snackSoft: '#ffd88f',
        snackDeep: '#e63946',
        snackYellow: '#ffcc00',
        snackPink: '#ff8fa3',
      },
      boxShadow: {
        glow: '0 25px 60px rgba(255, 106, 0, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
