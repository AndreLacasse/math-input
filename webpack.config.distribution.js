const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      // allows us to do `const MathQuill = require('mathquill');`
      mathquill: path.join(__dirname, "mathquill/mathquill.js"),
    },
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /(node_modules|mathquill)/,
    }, {
      // appends `module.exports = window.MathQuill` to mathquill.js
      test: /[\/]mathquill\.js$/,
      loader: "exports?window.MathQuill",
    }],
  },
};
