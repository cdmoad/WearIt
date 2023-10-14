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
        'custom-black':'#333333',
        'second-color':'#F7C154',
        'third-color':'#FF9B82',
        'custom-red':'#e11d48',
    },
    fontFamily:{
      'custom-primary':['Poppins', 'sans-serif'],
      'custom-secondary':['Roboto', 'sans-serif'],
    }
    },
    
  },
  plugins: [],
}

