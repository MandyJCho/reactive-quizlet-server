const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  externals: [nodeExternals()]
};
