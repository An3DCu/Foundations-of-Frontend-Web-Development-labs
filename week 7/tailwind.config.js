/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,js}",
  ],
  safelist: [
    'collapse',
    'collapsing',
    'collapse-horizontal',
    'show',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}