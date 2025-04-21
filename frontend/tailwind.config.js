/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg,png,svg,jpeg}"
  ],
  theme: {
    extend: {},
    safelist: [
      'animate-[fade-in_1s_ease-in-out]',
      'animate-[fade-in-down_1s_ease-in-out]',
      'animate-[tada]']
  },
  plugins: [],
}

