const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './index.jsx',
    },
    context: path.resolve(__dirname,"src"),
    output: {
        path: path.resolve(__dirname,"static", "build"),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: [".js",".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env","@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
            // TODO: Так работает CSS
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            },
                        },
                    },
                ],
            },

            // TODO: Так не работает CSS
            // {
            //     test:/\.css$/i,
            //     use:[MiniCssExtractPlugin.loader,
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 modules:{
            //                     localIdentName: '[path][name]__[local]--[hash:base64:5]',
            //                 }
            //             }
            //         }
            //     ],
            // },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname,"build"),
        compress:true,
        port:9000,
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Alf",
        filename: "index.html",
        template: "index.html"
    }),
    new MiniCssExtractPlugin(),
    ]
};