/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,css,html}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'royal-gradient': 'linear-gradient(to right, #4169E1, #8A2BE2)',
      }),
      colors: {
        'dark-black': '#393646',
        'dark-charcoal': '#4F4557',
        'dark-gray': '#6D5D6E',
        'dark-white': '#F4EEE0',
        'light-cream': '#FFFBCC',
        'light-red': '#FD2E2E',
        'light-cherry': '#CF1B1B',
        'light-maroon': '#900D0D',
      },
    },
  },
  plugins: [],
}