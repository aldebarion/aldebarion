const path = require('path') // eslint-disable-line

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '.dist'),
    filename: 'aldebarion.js',
    library: 'aldebarion',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  externals: ['react', 'prop-types'],
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.scss', '.json', '.svg'],
  },
}
