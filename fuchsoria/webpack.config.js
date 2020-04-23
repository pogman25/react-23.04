const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { index: './index.tsx' },
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundles/index.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.[sac]*ss$/i,
        exclude: '/node_modules/',
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
              localsConvention: 'camelCaseOnly',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundles/[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },
  devServer: {
    historyApiFallback: true,
  },
};
