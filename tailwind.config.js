/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#039E96', // Cor primária
        secondary: '#8A46FF', // Cor secundária
        cinzaclaro: '#EAECF0', // Cinza claro
        cinzaescuro: '#F2F4F7', // Cinza escuro
        preto: '#101828', // Preto
        gradientpersonalizado: {
          from: '#8A46FF', // Começo do gradiente
          to: '#039E96' // Fim do gradiente
        },
      },
    },
  },
  plugins: [],
}