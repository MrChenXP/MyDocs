// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
// const webpack = require('webpack'); // 用于访问内置插件


module.exports = {
    //入口起点单个入口
    //     entry:  './js/one.js',  //打包的入口文件
    // 入口起点对象语法
    entry:{
        one: './js/one.js',
        // pageTwo: './src/pageTwo/index.js',
        // pageThree: './src/pageThree/index.js'
    },
    output: {   // 打包之后的配置
        // filename: '[name].js',  //出口文件名称
        //多个入口起点
        filename:'bundle.js',
        path: __dirname + '/js' //出口文件的路径
    },
    module:{
        loaders:[
        //当碰到「在require()/import语句中被解析为'.txt'的路径」时，在对它打包之前，先使用raw-loader转换一下
        //     {test:/\.txt$/,user:'raw-loader'},
        //     {test:/\.css$/,user:'css-loader'},  //解析css 需要安装 npm install --save-dev css-loader
            {
                test: /\.js|jsx$/,   //是一个正则，代表js或者jsx后缀的文件要使用 下面的loader
                loader: 'babel',
                query:{
                    presets:['es2015']
                }
            },
            {
                test:/\.css$/,
                loaders: ['style', 'css'],
            },
            {//打包图片 先安装 npm install url-loader --save-dev
                test: /\.(gif|jpg|png|jpeg)\??.*$/,
                //当图片小于8192时会自动转成 base64 码引用 大于8192正常打包 name= 打包目录与文件名
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.png$/,
                loader: "file-loader?name=images/[hash:8].[name].[ext]"
            }
        ],
},
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    //     new HtmlWebpackPlugin({template: './src/index.html'})
    // ]

};