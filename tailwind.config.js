/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-moss-green': '#606c38',
        'pakistan-green': '#283618',
        'cornsilk': '#fefae0',
        'earth-yellow': '#dda15e',
        'tigers-eye': '#bc6c25',
      },
    },
  },
  plugins: [],
}