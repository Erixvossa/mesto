const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    plugins: ['transform-class-properties']
                  }
            },
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /.(png|svg|jpg|gif)$/,
                loader: 'file-loader?name=./images/[name].[ext]'
            },
            {
                test: /.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};