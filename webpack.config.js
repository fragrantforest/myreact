const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'js/app.js'
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
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name:'resource/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name:'resource/[name].[ext]'
              }
            }
          ]
        }
      ]
  },
  plugins: [
     new HtmlWebpackPlugin({
      template:'./src/index.html'
     }),
     new ExtractTextPlugin("css/[name].css"),
  ],
  optimization: {
    runtimeChunk: {
        name: "manifest"
    },
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all"
            }
        }
    }
}
,
   devServer: {
     port:8574,
     historyApiFallback:{
     	index:'/dist/index.html'
     }
  },
};