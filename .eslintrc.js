module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    semi: [2, 'never'],
    'no-extra-boolean-cast': 'off',
    curly: 'multi',
  },
}
