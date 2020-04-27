const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.jsx',         
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'                                   
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,                        //регулярки по расширениям, которые нужно находить
                exclude: /(node_modules|bower_components)/, //исключить
                use: {                                      //какой лоадэр и опции использовать 
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },
    devServer: {                                    //devServer запускает webpack в watch-режиме
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })]
};