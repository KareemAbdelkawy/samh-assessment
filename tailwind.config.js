/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#000',
        'brand-white': '#fff',
        'brand-green-800': '#274b3e',
        'brand-gray-500': '#212121',
        'brand-blue-100': '#9CB5CB',
        'brand-green': '#638253',
        'brand-grey': '#84837e',
        'brand-dark-grey': '#393b38',
        'brand-light-white': '#f7f6f4',
        'brand-light-gray': '#707070',
        'brand-err-color': '#d20a00',
      },
      fontFamily: {
        brasley: ['Brasley', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
