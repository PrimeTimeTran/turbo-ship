module.exports = {
  semi: false,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['**/*.vue'],
      options: {
        parser: 'vue',
      },
    },
  ],
}
