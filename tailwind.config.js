/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-50': '#F4F6F6',
        'grey-100': '#EEF1F1',
        'grey-150': '#E3E8E8',
        'grey-200': '#CAD0CF',
        'grey-300': '#A4A9A8',
        'grey-400': '#7F8382',
        'grey-500': '#5C5F5F',
        'grey-600': '#3C3E3D',
        'grey-650': '#232424',
        'grey-700': '#1E1F1F',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1280px',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
        },
      });
    },
  ],
}
