module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['jest', 'jsx-a11y'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-unused-vars': 'error',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.jsx',
          '**/*.stories.js',
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
