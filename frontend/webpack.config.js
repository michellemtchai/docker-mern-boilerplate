require('dotenv').config({path: '/.env'});
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getEnv = (list)=>{
    let env = {};
    list.forEach(item=>{
        env['process.env.'+item]= JSON.stringify(process.env[item]);
    })
    return env;
}

module.exports = {
    mode: 'development',
    entry: [
        'whatwg-fetch',
        'core-js/es/promise',
        'core-js/es/string',
        'core-js/es/array',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build/assets'),
        filename: 'bundle.js',
        publicPath: '',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin(getEnv([
            'APP_ENV',
            'PORT'
        ])),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, 'public/index.html'),
        }),
    ],
    devServer: {
        host: process.env.HOST,
        publicPath: '/',
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        compress: true,
        port: process.env.FRONTEND_PORT,
        watchOptions: {
            poll: true
        },
        historyApiFallback: true
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 5,
                    mangle: true
                },
                sourceMap: true
            }),
            new CssMinimizerPlugin(),
        ],
    },
};