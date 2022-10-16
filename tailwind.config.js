/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-itau': '#01359a',
        'laranja-itau': '#ec7000',
        'amarelo-itau': '#ffff00',
      },
    },
  },
  plugins: [],
};
