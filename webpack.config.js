const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const loaders = [
  {
    test: /\.js$/,
    exclude: [/node_modules/],
    include: path.resolve(__dirname, 'src'),
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        plugins: [require('babel-plugin-transform-object-rest-spread')]
      }
    },
  }
]

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: 'bundle.js',
  module: { rules: loaders },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      title: 'Reactive Server',
      template: './src/index.tmpl.html',
    }),
  ],
}
