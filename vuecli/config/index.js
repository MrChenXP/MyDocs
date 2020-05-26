'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static', // 静态资源文件夹
    assetsPublicPath: '/', // 发布路径
    // 代理设置 会将127.0.0.1:8081代理到target设置的域名
    // 前端请求http-proxy-middleware插件开启的中间件(服务器),由中间件进行转发请求
    proxyTable: { 
      '/api/*': { // 匹配项 查找接口中是否有'api'字符串 一般后端给的接口没有'api',要自己加
        target: 'https://jsonplaceholder.typicode.com/', // 目标接口域名的域名
        secure: true,  // 如果是https接口,需要配置这个参数为true
        changeOrigin: true, // 设置为true, 代表开启代理
        pathRewrite: {
          '^/api': '' // 重写接口 把前端接口中'/api'改成'',不然后端识别不了带api的接口
        }
      },
      '后续可以写多个跟上面一样的匹配规则':{}
    },

    // Various Dev Server settings
    host: '127.0.0.1', // 原来是localhost 改成ip后可用ip访问页面
    port: 8081, // 端口
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
