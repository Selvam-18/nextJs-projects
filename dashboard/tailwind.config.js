/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        84: '84px',
        19: '79px'
      }, 
      spacing: {
        18: '4.5rem'
      }
    },
  },
  plugins: [],
}

