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
        fcolor:"#2A4064",
      },
      borderRadius:{
        '5xl': '2rem',
      },
      fontFamily:{
        open:['Open Sans'],
        work:["Work Sans"],
        inter:["Inter"],
      },   
      cursor:{
        "&":'url("/andp.svg"), auto',
      },
      keyframes: {
        'slideIn': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(-100%)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
