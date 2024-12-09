
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
        primary: '#F8F9FD',
        secondary: '#ff7c00',
        "text-primary":'#001423',
      },
      fontFamily:{
        roboto: 'Roboto'
      }
    },
  },
  plugins: [],
};
