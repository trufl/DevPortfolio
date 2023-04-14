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
    },
  },
  plugins: [],
}

