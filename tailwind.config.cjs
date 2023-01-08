/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      heading: ['Sora', 'sans-serif'],
      body: ['Sora', 'sans-serif'],
      mono: ['monospace'],
    },
    extend: {},
  },
  plugins: [],
}
