/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          600: '#1e3a8a',
          700: '#1e3270',
          800: '#172354',
          900: '#0f1a3d',
        },
      },
    },
  },
  plugins: [],
}
