/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'ssm': '300px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    }
  },
  plugins: [],
  
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    // ...
  
}