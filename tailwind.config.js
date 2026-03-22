/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        surface: '#111111',
        surfaceHigh: '#1c1624',
        violet: {
          primary: '#a87fd4',
          dim: '#8a61b8',
          glow: 'rgba(168,127,212,0.18)',
          subtle: 'rgba(168,127,212,0.08)',
          border: 'rgba(168,127,212,0.28)',
        },
        text: {
          primary: '#e8e0d0',
          secondary: '#a09880',
          muted: '#5a5248',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
        'fade-in-slow': 'fadeIn 3s ease forwards',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(3%, 2%)' },
          '30%': { transform: 'translate(-1%, 4%)' },
          '40%': { transform: 'translate(2%, -1%)' },
          '50%': { transform: 'translate(-3%, 1%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(-2%, 3%)' },
          '80%': { transform: 'translate(3%, -3%)' },
          '90%': { transform: 'translate(-1%, 2%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scrollHint: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
