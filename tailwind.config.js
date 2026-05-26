/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0e27',
          800: '#1a1f3a',
          700: '#2a2f4a',
          600: '#3a3f5a',
        },
        primary: {
          400: '#00d4ff',
          500: '#00b8ff',
          600: '#0099ff',
        },
        accent: {
          400: '#ff6b6b',
          500: '#ff5252',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 212, 255, 0.8)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-100px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        slideIn: 'slideIn 0.6s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(0, 180, 255, 0.1) 0%, rgba(0, 100, 255, 0.05) 50%, rgba(0, 20, 50, 0) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
