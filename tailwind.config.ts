import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': "url('/public/assets/backgrounds/gran-barrera-de-coral01.png')"
      },
      colors: {
        'primary': '#403cc7',
        'secondary': '#ebebff',
        'ternary': '#b0b0d9',
        'default': '#706cff'
      }
    },
  },
  plugins: [],
}
export default config
