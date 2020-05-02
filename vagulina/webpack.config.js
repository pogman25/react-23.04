const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports={
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                [
                    "@babel/plugin-proposal-class-properties",
                    {
                        "loose": true
                    }
                ]
              ]
            }
          }
        }
    ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
      },
    plugins: [new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'src/index.html'
      })]
};