import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'lexend': "'Lexend', sans-serif"
      },
      backgroundImage: {
        'background-1': "url('/assets/gran-barrera-de-coral0 1.png')",
        'accommodation-hoteles': "url('/assets/accommodation/Hoteles.png')",
        'accommodation-hostales': "url('/assets/accommodation/Hostales.png')",
        'accommodation-apartamentos': "url('/assets/accommodation/Apartamentos.png')",
      },
      colors: {
        'primary': '#403cc7',
        'secondary': '#ebebff',
        'ternary': '#b0b0d9',
        'default': '#706cff',
        'paragraph': '#515151'
      },
      boxShadow: {
        "default": "4px 4px 6px 0px #4B4B4B70"
      }
    },
  },
  plugins: [],
};

export default config
