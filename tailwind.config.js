/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: {
          DEFAULT: '#0B1121',
          light: '#0F172A',
        },
        royal: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        electric: {
          DEFAULT: '#3B82F6',
        },
        sky: {
          accent: '#38BDF8',
        },
        emerald: {
          accent: '#10B981',
        },
        slate: {
          muted: '#94A3B8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'hover-lift': 'hoverLift 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
