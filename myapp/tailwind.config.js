/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#EDF1D6',
        'custom-green': '#609966',
        'custom-blue': '#344D67',
        'custom-black':'#333333'
    },
    },
    
  },
  plugins: [],
}

