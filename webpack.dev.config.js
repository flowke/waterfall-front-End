let webpack = require('webpack');
let path = require('path');

let htmlWebpackPlugin = require('html-webpack-plugin');
let openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

let srcPath = path.join(__dirname, '/src');
let pagePath = path.join(__dirname, '/src/page');
let componentPath = __dirname + '/src/lib/components';
let imagePath = __dirname + '/src/static/images';
let publicPath = '/assets/';
let frameWorkPath = __dirname +'/src/lib/framework';
let modulePath = __dirname + '/src/module';

module.exports = {
    // entry: pagePath + '/index/index.js',
    entry: {
        index: pagePath + '/index/index.js'
    },
    output: {
        path: __dirname + '/dist/assets',
        filename: '[name].js',
        publicPath: publicPath
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
                loader: 'style-loader!css-loader?modules!less-loader'
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
                include: srcPath,
                loader: 'babel-loader'
            }
            // {
            //     test: require.resolve('imagesloaded'),
            //     loader: 'imports?$=jquery'
            // }

        ]
    },

    resolve: {
        extensions: ['', '.js', 'jsx'],
        // root: [path.join(__dirname, "/bower_components")],
        modulesDirectories: ["web_modules", "node_modules","bower_components"],
        alias: {
            components: componentPath ,
            pb: componentPath + '/public',
            style: __dirname + '/src/static/style',
            image: imagePath,
            frameWorkPath: frameWorkPath,
            modulePath: modulePath
        }
    },
    externals:{
    },
    plugins: [
        new htmlWebpackPlugin({
            template: pagePath + '/index/index.html',
            filename: '../index.html',
            inject: true,
            hash: false,
            chunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new openBrowserWebpackPlugin({
            url: 'http://127.0.0.1:8000/index.html'
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        // new webpack.IgnorePlugin(/\.(wookmark|imagesloaded)$/),
        // new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor','manifest'],
        // }),
        // new webpack.ProvidePlugin({
        //     //这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
        //     $: 'jquery',
        //     jQuery: 'jquery',
        // })
    ],

    devServer: {
        port: 8000,
        contentBase: __dirname + '/dist' ,//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新,
        hot: true
    }
}
