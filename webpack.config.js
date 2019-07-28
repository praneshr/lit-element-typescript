const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = [{
  mode: 'production',
  // devtool: "inline-source-map",
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
    webcomponent: path.join(
      __dirname,
      'node_modules/@webcomponents/webcomponentsjs',
      'webcomponents-bundle.js',
    ),
    main: path.join(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    jsonpScriptType: 'module',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
    }),
    new ManifestPlugin(),
    new OfflinePlugin({
      appShell: '/',
      responseStrategy: 'network-first',
      ServiceWorker: {
        minify: false,
        events: true,
      },
    }),
  ],
},
{
  mode: 'development',
  entry: path.join(__dirname, 'server.ts'),
  output: {
    path: path.join(__dirname),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
    }],
  },
},
];
