const rimraf = require('rimraf');

// 删除 dist 目录
rimraf.sync('dist');

module.exports = {
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
        contentBase: __dirname,
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            // include: [helpers.resolve('src'), helpers.resolve('test'), helpers.resolve('node_modules/webpack-dev-server/client')]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    scss: ['sass-loaders'],
                }
            }
        }, ]
    }
}