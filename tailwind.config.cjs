/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      heading: ['Rubik', 'sans-serif'],
      body: ['Rubik', 'sans-serif'],
      mono: ['monospace'],
    },
    extend: {},
  },
  plugins: [],
}
