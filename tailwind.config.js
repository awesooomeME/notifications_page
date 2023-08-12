/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    colors: {
      red: 'hsl(1, 90%, 64%)',
      blue: 'hsl(219, 85%, 26%)',
      white: 'hsl(0, 0%, 100%)',
      light_grayish_blue_1: 'hsl(211, 68%, 94%)',
      light_grayish_blue_2: 'hsl(205, 33%, 90%)',
      grayish_blue: 'hsl(219, 14%, 63%)',
      dark_grayish_blue: 'hsl(219, 12%, 42%)',
      very_dark_blue: 'hsl(224, 21%, 14%)'
    },
    fontWeight: {
      normal: '500',
      heavy: '800'
    }
  },
  plugins: [],
}
