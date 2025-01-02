import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        CinzaM: '#121212',//#0f0f0f
        Cinza: '#1c1c1c',//#121212
        Verde: '#11390e'
      },
      screens: {
        'max-sm': { max: '750px' },
        'max-smd': { max: '1290px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
