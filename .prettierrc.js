module.exports = {
  parser: 'babylon',
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
  ],
};
