/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { colors: {
        'cookie-body': '#4B2E2B',
        'cookie-text': '#F5E8C7',
        'cookie-foot-nav': '#3B1F1B',
        'cookie-light':'#6F4E37',
        'cookie-mid':'#5C3A2E'
      }},
  },
  plugins: [],
}

