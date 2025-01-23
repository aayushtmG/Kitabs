
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C2633',
        secondary: '#0074D9',
        "text-primary":'#001423',
      },
      fontFamily:{
        roboto: 'Roboto'
      }
    },
  },
  plugins: [],
};
