const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode:'development', // 开发模式
    entry: './src/index.tsx', // 入口文件
    output:{
        path:path.resolve(__dirname,'dist'), // 路径
        filename:'bundle.js' // 文件名
    },
    devtool: 'source-map', // 本地调试
    devServer:{
        hot:true, // 懒加载
        contentBase:path.join(__dirname,'dist'), // 打包后的基本路径
        historyApiFallback: true // 无法响应的路由都会重定向到首页
    },
    // 处理路径解析的
    resolve:{
        extensions:['.tsx','.ts','.js','.jsx']
    },
    // 模块的处理
    module:{
        rules:[
            {
                test:/\.tsx?/, // 处理.tsx后缀的文件
                loader:'ts-loader'
            },
            {
                // pre normal post 前 中 后
                enforce: 'pre',
                test: /\.tsx?/,
                loader:'source-map-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html', // 模板
            filename:'index.html' // 路径
        }),
        new webpack.HotModuleReplacementPlugin() // 配合 devServer里hot:true 实现懒加载
        
    ]
}