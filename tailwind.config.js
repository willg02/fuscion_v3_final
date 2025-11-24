/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sanctuary': '#FAFAF8',
        'charcoal': '#1A1A1A',
        'warm-grey': '#4F4F4F',
        'soft-beige': '#E4E0D8',
        'graphite': '#4A4A4A',
        'graphite-hover': '#3A3A3A',
        'link': '#222222',
        'muted': '#6A6A6A',
        'footer-text': '#7A7A7A',
      },
      fontFamily: {
        'inter': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      lineHeight: {
        'relaxed-body': '1.6',
        'relaxed-heading': '1.4',
        'relaxed-poem': '1.8',
      },
      letterSpacing: {
        'heading': '-0.003em',
        'micro': '0.01em',
        'caps': '0.06em',
      },
      spacing: {
        '120': '120px',
        '160': '160px',
        '200': '200px',
      },
    },
  },
  plugins: [],
}
