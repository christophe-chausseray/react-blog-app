const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './app/index.js'
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './app',
    watchContentBase: true,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    })
  ]
});
