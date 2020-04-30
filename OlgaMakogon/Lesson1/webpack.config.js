const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {react:'./src/index.js'},
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
      },
      module: {
          rules: [
        {
          test: /\.m?(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
      }
    plugins: [new HtmlWebpackPlugin({
        fileneme: "index.html",
        template: "src/index.html"
    }),
],
};