/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        // => @media (min-width: 480px) { ... }
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
    
  },
  plugins: [],
}

