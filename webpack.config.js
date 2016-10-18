
let htmlWebpackPlugin = require('html-webpack-plugin');

let pagePath = path.join(__dirname, '/src/page');
let srcPath = path.join(__dirname, '/src')

module.exports = {
    entry: {
        index: pageSrc + '/index/index.js',
        cloud: pageSrc + 'cloudDriver/cloudDriver.js'
    },
    output: {
        path: __dirname + '/dist/assets',
        filename: '[name].js'
    },
    devtool: 'eval-source-map',

    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader!postcss-loader'
            },
            {
              test: /\.less/,
              loader: 'style-loader!css-loader!less-loader'
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
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'react-hot-loader!babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', 'jsx'],
        alias: {}
    },
    plugins: [
        new htmlWebpackPlugin({
            title:'duyun',
            filename: 'index.html',
            chunks: ['./assets/index.js']
        }),
        new htmlWebpackPlugin({
            title: 'cloudDriver',
            filename: 'cloudDriver.html',
            chunks: ['./assets/cloud.js']
        })
    ],

    devServer: {
        contentBase: "./src/page",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新,
        hot: true
    }
}