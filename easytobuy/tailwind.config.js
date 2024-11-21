/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  
  screens: {
    sm: '600px', // Update the 'sm' breakpoint to 600px
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
},
  plugins: [],
}

