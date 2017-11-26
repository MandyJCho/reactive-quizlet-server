const slsw = require('serverless-webpack');

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
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('.webpack'),
    filename: 'src/handler.js'
  }
  // externals: [nodeExternals()]
};
