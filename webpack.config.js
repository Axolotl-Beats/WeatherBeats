const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './client/index.jsx',
  // Default to development
  mode: process.env.NODE_ENV || 'development',
  output: {
    // output production to /dist (change if you want)
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
              // options...
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public', 'index.html'),
      fileName: './index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css/mystyles.css'
    }),
    new Dotenv({
      path: path.resolve(__dirname, './.env'),
      safe: true
    })
  ],
  devServer: {
    // for routing
    // historyApiFallback: true,
    // HMR nodemon for webpack
    hot: true,
    liveReload: true,
    // static files
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/'
    },
    compress: true,
    // opens window when changes happen (can be annoying beware)
    // open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
      },
    },
  }
};
