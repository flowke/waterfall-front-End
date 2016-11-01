/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

// my path
let pagePath = path.join(__dirname, '/../src/page');
let componentPath = __dirname + '/../src/lib/components';
let imagePath = __dirname + '/../src/static/images';
let frameWorkPath = __dirname +'/../src/lib/framework';
let publicPath = '/public/assets/';

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
    return {
        loaders: [
            {
              test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
              test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            {
              test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
              test: /\.less/,
                loader: ExtractTextPlugin.extract('css-loader?modules!less-loader')
            },
            {
              test: /\.styl/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
              test: /\.(png|jpg|gif|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
              test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery
              loader: 'expose?$!expose?jQuery', // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
            },
        ]
    };
}

module.exports = {
    srcPath: srcPath,
    publicPath: publicPath,  // 文件映射在在后端服务器的目录，根据后端设置而定
    port: dfltPort,
    getDefaultModules: getDefaultModules,
    pagePath: pagePath,
    componentPath: componentPath,
    imagePath: imagePath,
    frameWorkPath: frameWorkPath

};
