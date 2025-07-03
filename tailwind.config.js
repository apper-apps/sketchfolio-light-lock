/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#f5f5f0',
        accent: '#d4a574',
        surface: '#ffffff',
        background: '#fafaf8',
        success: '#4a7c59',
        warning: '#e9c46a',
        error: '#c1666b',
        info: '#4a5568',
      },
animation: {
        'skeleton-pulse': 'skeleton-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'ripple': 'ripple 0.6s linear',
        'particle': 'particle 10s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'skeleton-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(120deg)' },
          '66%': { transform: 'translateY(-10px) rotate(240deg)' },
        },
        'morph': {
          '0%, 100%': { 
            borderRadius: '4px',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': { 
            borderRadius: '50%',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': { 
            borderRadius: '4px',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': { 
            borderRadius: '25%',
            transform: 'rotate(270deg) scale(1.05)'
          },
        },
        'glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(212, 165, 116, 0.5)' 
          },
          '50%': { 
            textShadow: '0 0 20px rgba(212, 165, 116, 0.8), 0 0 30px rgba(212, 165, 116, 0.6)' 
          },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'particle': {
          '0%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
            opacity: '0'
          },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { 
            transform: 'translateY(-100px) translateX(20px) rotate(360deg)',
            opacity: '0'
          },
        },
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lifted': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 30px rgba(212, 165, 116, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(212, 165, 116, 0.2)',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}