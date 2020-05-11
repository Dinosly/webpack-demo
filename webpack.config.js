const rimraf = require('rimraf');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var miniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;
const extractOptions = {
    filename: env !== 'production' ? 'css/style.css' : 'css/style.[hash].css',
    chunkFilename: env !== 'production' ? 'css/[id].css' : 'css/[id].[hash].css'
};
// 删除 dist 目录
rimraf.sync('dist');

module.exports = {
    mode: env,
    devtool: 'eval-source-map',
    //__dirname 指的是当前文件所在路径
    //entry后指定入口文件
    entry: __dirname + "/main.js",
    output: {
        //打包后输出文件地址
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devServer: {
        // contentBase: __dirname,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            //这里可以不写，单独创建一个.babelrc文件进行相关配置
            // options: {
            //     presets: ['env']
            // },
            // 不去编译依赖中的js文件，优化加快速度
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    scss: ['sass-loaders'],
                }
            }
            // options: {
            //     //解析.vue文件中样式表
            //     loaders: {
            //         // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            //         // the "scss" and "sass" values for the lang attribute to the right configs here.
            //         // other preprocessors should work out of the box, no loader config like this necessary.
            //         'scss': 'vue-style-loader!css-loader!sass-loader',
            //         'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            //     }
            // }
        }, ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: __dirname + '/index.html', //模板路径
            filename: 'index.html' //自动生成的HTML文件的名称
        }),
        new miniCssExtractPlugin(extractOptions)
    ]
}