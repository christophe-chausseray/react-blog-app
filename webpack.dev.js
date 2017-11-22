const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge.smart(common, {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './app/index.js',
    './scss/main.scss'
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './app',
    watchContentBase: true,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // Add SASS support  - compile all other .scss files and pipe it to style.css
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
    })
  ]
});
