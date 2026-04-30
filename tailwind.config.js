/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Gray + Ocean Blue palette
        ink: {
          950: '#0b1220', //  near-black with a navy tint
          900: '#0f172a', //  slate-950ish, page bg
          800: '#1e293b', //  card bg
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
        },
        ocean: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#38bdf8', //  glow color
          500: '#0ea5e9', //  primary
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'ocean-glow': '0 0 60px -10px rgba(56, 189, 248, 0.55)',
        'ocean-soft': '0 0 30px -6px rgba(14, 165, 233, 0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        'orb-drift': {
          '0%':   { transform: 'translate3d(8vw, 12vh, 0) scale(1)' },
          '20%':  { transform: 'translate3d(72vw, 8vh, 0) scale(1.05)' },
          '40%':  { transform: 'translate3d(78vw, 64vh, 0) scale(1.1)' },
          '60%':  { transform: 'translate3d(20vw, 78vh, 0) scale(0.95)' },
          '80%':  { transform: 'translate3d(4vw, 40vh, 0) scale(1.03)' },
          '100%': { transform: 'translate3d(8vw, 12vh, 0) scale(1)' },
        },
        'orb-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%':      { opacity: '0.85' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'orb-drift': 'orb-drift 28s ease-in-out infinite',
        'orb-pulse': 'orb-pulse 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        'shimmer': 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
};
