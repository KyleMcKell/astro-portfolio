module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  astroAllowShorthand: true,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
