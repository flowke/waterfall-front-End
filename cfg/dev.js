'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./default');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    entry: {
        index: defaultSettings.pagePath + '/index/index.js'
    },
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new ExtractTextPlugin('[name].css'),
        new htmlWebpackPlugin({
            template: defaultSettings.pagePath + '/index/index.html',
            filename: '../../index.html',
            inject: true, //Inject all scripts into the body
            hash: false,
            chunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        }),
        new openBrowserWebpackPlugin({
            url: 'http://127.0.0.1:8000/index.html'
        })
    ],
    externals: {
        "window" : 'window',
        "document": 'document'
    },
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push(
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
            config.additionalPaths,
            [ path.join(__dirname, '/../src') ]
        )
    },
    {
      test: /\.less/,
        loader: 'style-loader!css-loader?modules!less-loader'
    }
);

module.exports = config;
