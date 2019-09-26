//http可以实现一个web服务器 https://www.baidu.com/more/  baidu就是服务器
//路由router 就是网址后面的东西 如https://www.baidu.com/more/ 的more
//http 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 http 模块
    const http = require('http');
    const fs = require('fs');
    const url = require('url'); //操作url的工具库
    const querystring = require('querystring');//解析json
//创建服务器 赋值给变量server (请求，响应)
//     let server = http.createServer(function (request,response) {
//         let pathname = url.parse(request.url).pathname;  // url.parse:解析请求，包括文件名
//         console.log("请求的问件是" + pathname);           // 输出请求的文件名
//         // 从文件系统中读取请求的文件内容 pathname.substr(1) 从1下标开始返回字符串
//             fs.readFile(pathname.substr(1),function (err,data) {
//                 console.log(data.toString());
//                 if (err) {
//                     console.log(err);
//                     response.writeHead(404, {'Content-Type': 'text/html'});
//                 }else{
//                     //写入流.写头部信息方法(状态码,{'传什么类型给浏览器':'html;字符编码=utf-8'})
//                         //text/plain 纯文本 application/json json文件 text/html html文件
//                     response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//                     response.write(data.toString());    //响应文件内容
//                     //响应json内容
//                     // let oJson = {age:27,sex:"boy"};
//                     // response.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
//                     // response.write(JSON.stringify(oJson));  //JSON Formatter 浏览器插件 可以有格式的显示json
//                 }
//                 response.end();//  发送响应数据
//             });
//     });
//使用流来创建服务器 响应数据 解决找不到文件服务器崩溃问题
let server = http.createServer(function(request, response) {
    let pathname = url.parse(request.url).pathname; //
    console.log(pathname);
    if (pathname === '/' || pathname === '/index') {
        console.log(2);
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
    }else if(pathname === '/json'){
        let data = '';//定义了一个post变量，用于暂存请求体的信息
        request.on('error',function (err) {
            console.log(err);
        }).on('data',function (chuck) {  //通过reqest的data事件监听函数，每当接受到请求体的数据，就累加到data变量中
            data +=chuck;
        }).on('end',function () {
            if(request.method === "POST"){ //判断传递方式 post 一定要大写
                console.log(data);
                if(data.length > 1e2){  //判断请求的数据长度 超过100就返回原页面
                    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
                }else{
                    response.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
                    response.end(JSON.stringify(querystring.parse(data)));//先将字符串转成json对象(去掉多余的字符) 再转为json字符串
                }

            }else{  //get方式
                let params = url.parse(request.url,true).query; //true:解析后返回一个对象 false返回字符串 get方法才能取到值
                console.log(params);    //现在是个json对象
                response.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
                response.end(JSON.stringify(params));   //序列化json变成json字符串响应页面
            }
        })
    }else {
        console.log(404);
        response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.createReadStream(__dirname + '/EJS/404.html', 'utf8').pipe(response);
    }
});
    server.listen(1997 ,'127.0.0.1');//服务器绑定在一个端口上 ('端口'[,'ip'])
    console.log('已监听到1997端口');





// 创建 Web 客户端 先运行上面创建服务器，再新建js文件，执行下列代码 模拟浏览器
//     let http = require('http');
//     let options = { // 用于请求的选项
//         host: 'localhost',
//         port: '1997',
//         path: '/index.html'
//     };
//     let callback = function (response) { // 处理响应的回调函数
//         let body = '';
//         response.on('data',function (data) {
//             body += data;
//         });
//         response.on('end',function () {
//             console.log(body);
//         });
//     };
//     let req = http.request(options,callback); // 向服务端发送请求
//     req.end();







