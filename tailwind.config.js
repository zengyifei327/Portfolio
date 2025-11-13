/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
          800: '#14532d',
          900: '#0f3d1f',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#059669',
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)",
        "gradient-secondary": "linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)",
        "gradient-accent": "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",
        "gradient-dark": "linear-gradient(135deg, #166534 0%, #14532d 50%, #0f3d1f 100%)",
        "gradient-deep-green": "linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%)",
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(22, 163, 74, 0.5)',
        'glow-lg': '0 0 40px rgba(22, 163, 74, 0.8)',
        'glow-green': '0 0 20px rgba(22, 163, 74, 0.5)',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};