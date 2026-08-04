/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-slate': '#0D131A',
        'ocean-blue': '#1A2F4B',
        'golden-sand': '#D4A373',
        'golden-sunset': '#E6AA68',
        'warm-shell': '#FAFAF5',
        'soft-silver': '#E0E0E0',
        'palm-green': '#3A5A40',
        'dusk-slate': '#4A4E69',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
        'poetic': ['"Cormorant Garamond"', 'serif'],
        'body': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
