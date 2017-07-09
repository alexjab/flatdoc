const path = require('path')

const webpack = require("webpack");

const webpackConfig = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    publicPath: '/dist/',

    libraryTarget: "var",
    library: "Flatdoc"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: path.join('dist', 'manifest.json')
    })
  ],

  devServer: {
    port: 8000
  }
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = webpackConfig
