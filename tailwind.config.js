/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          canvas: '#f4f1ea',
          card: '#ffffff',
          cream: '#fbf9f5',
          warmBorder: '#e4ded4',
          darkBg: '#111713',
          darkCard: '#17201a',
          darkBorder: '#233027',
        },
        sage: {
          50: '#f3f6f3',
          100: '#e3ece4',
          200: '#c8d9cb',
          300: '#a7c1ab',
          400: '#86a68b',
          500: '#6c8572',
          600: '#5a7260',
          700: '#485a4d',
          800: '#38473c',
          900: '#1f2b22',
          950: '#111813',
        },
        terracotta: {
          50: '#fdf4ef',
          100: '#fbe6dc',
          200: '#f6cbba',
          300: '#eda68d',
          400: '#e37e5e',
          500: '#cb6336',
          600: '#b9552b',
          700: '#994121',
          800: '#7b341c',
          900: '#652d1b',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', '"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'thick': '0 12px 30px -10px rgba(35, 48, 38, 0.09), 0 4px 6px -2px rgba(35, 48, 38, 0.04)',
        'thick-hover': '0 20px 40px -12px rgba(108, 133, 114, 0.22), 0 8px 16px -4px rgba(35, 48, 38, 0.08)',
        'thick-dark': '0 12px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'terracotta-glow': '0 10px 25px -5px rgba(203, 99, 54, 0.4)',
        'sage-glow': '0 10px 25px -5px rgba(108, 133, 114, 0.35)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      }
    },
  },
  plugins: [],
};
