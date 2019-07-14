const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: false,
    port: 9090,
    overlay: true,
  },
  entry: {
    webcomponent: path.join(__dirname, 'node_modules/@webcomponents/webcomponentsjs', 'webcomponents-bundle.js'),
    main: path.join(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    jsonpScriptType: 'module',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
    }),
  ],
};
