var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'art.js',
  output: {
    path: '/dist',
    filename: 'bundle.js',
  },
  module: {
    test: /\.art$/,
    loader: 'art-template-loader',
  },
  plugins: [
    new htmlWebpackPlugin(),
  ],
}