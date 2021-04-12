const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

var babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ]
  }
};

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.[hash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8081
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [babelLoader, { loader: 'ts-loader' }]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [/node_modules/, /build/, /__test__/]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader' // translates CSS into CommonJS
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin(
      [
        {
          from: 'src/assets/*',
          to: '',
          toType: 'dir',
          flatten: true
        },
        {
          from: 'src/favicon.ico',
          to: '',
          toType: 'dir',
          flatten: true
        }
      ],
      {}
    )
  ]
};
