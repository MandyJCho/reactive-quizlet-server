const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');

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
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.graphql$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'graphql-tag/loader'
            },
          ]
        },
      ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, '.webpack'),
        filename: '[name].js',
    },
    externals: [nodeExternals()],
  };