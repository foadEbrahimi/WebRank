/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Tanha: ['Tanha'],
      },
      colors: {
        Primary: '#40A2D8',
        // Primary_light: "",
        SectionTitle: '#aaaaaa',
      },
      listStyleImage: {
        click: "url('../public/images/double-check.svg')",
      },
      screens: {
        laptop: '1000px',
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
};
