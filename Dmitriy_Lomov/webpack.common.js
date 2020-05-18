const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { app: "./src/index.jsx" },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                },
            },
        },
        ],
    },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
};