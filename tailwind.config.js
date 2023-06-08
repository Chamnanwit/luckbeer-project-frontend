/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'mainb': '#303D39',
          'mainc': '#fff1d4',
          'mainr': '#e04f4f',
          'supc': '#b6af9f',
          'supp': '#353335',
          'supb': '#293360',
          'subg': '#184529',
        },
      },
    },
    plugins: [],
  }