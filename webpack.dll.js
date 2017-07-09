const path = require("path");

const webpack = require("webpack");

const vendors = [
  'highlight.js/styles/atom-one-dark.css',

  'highlight.js',
  'jquery',
  'lodash/deburr',
  'lodash/kebabCase',
  'marked'
];

const webpackConfig = {
  entry: {
    lib: vendors
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "dll.js",
    library: "[name]",
    publicPath: '/dist/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', 'manifest.json')
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = webpackConfig;
