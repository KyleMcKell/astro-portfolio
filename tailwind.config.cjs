/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      heading: ['Overpass', 'sans-serif'],
      body: ['Overpass', 'sans-serif'],
      mono: ['Overpass Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
