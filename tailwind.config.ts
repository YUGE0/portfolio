import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily:{
        open:['Open Sans'],
        work:["Work Sans"],
        inter:["Inter"],
      },   
      cursor:{
        "&":'url("/andp.svg"), auto',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
