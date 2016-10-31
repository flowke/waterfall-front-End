'use strict';
let htmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./default');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    entry: {
          index: defaultSettings.pagePath + '/index/index.js'
    },
    cache: false,
    devtool: 'sourcemap',
    plugins: [
        new htmlWebpackPlugin({
            template: defaultSettings.pagePath + '/index/index.html',
            filename: '../../index.html',
            inject: true, //Inject all scripts into the body
            hash: false,
            chunks: ['index']
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        })
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.AggressiveMergingPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: [].concat(
        config.additionalPaths,
        [ path.join(__dirname, '/../src') ]
    )
});

module.exports = config;
