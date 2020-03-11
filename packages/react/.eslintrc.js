module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-unused-vars': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
