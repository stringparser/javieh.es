module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
