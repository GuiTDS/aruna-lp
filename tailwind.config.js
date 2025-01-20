/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', 
    './**/*.html', 
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
