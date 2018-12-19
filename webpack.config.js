const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
        {
          test: /\.m?jsx$/,
          exclude: /(node_modules)/,
          use:{
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env','@babel/preset-react'] 
              }
          }
        }
      ]
  },
  plugins: [
     new HtmlWebpackPlugin({
      template:'./src/index.html'
     }) 
  ]
};