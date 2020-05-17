module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['jest'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.spec.js',
          '**/*.spec.jsx',
          'config/**/*',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
