//http://www.runoob.com/nodejs/nodejs-global-object.html

// Node.js中全局对象是global 所有全局变量(除global本身)都是global对象的属性/
//__filename            表示当前执行脚本的文件名 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
//__dirname             表示当前执行脚本所在的目录  同上
//setTimeout(cb, ms)    在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。 返回一个代表定时器的句柄值。
//clearTimeout( t )     用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 赋予的句柄变量
//setInterval(cb, ms)   在指定的毫秒(ms)数后循环执行指定函数(cb)。
//clearInterval(t)      清除setInterval定时器
//path.join()           对于以/开始的路径片段，path.join只是简单的将该路径片段进行拼接
// function file() {    console.log('当前文件路径是'+__filename);}
// function dir() {    console.log('当前文件目录'+__dirname);}
// var t = setTimeout(file, 2000);
// clearTimeout(t);
// var b = setInterval(dir,1000);
// clearInterval(b);
// var path = require('path'); //引用path模块 用于处理文件路径的小工具
// var p = path.join(__dirname,'test','test.js') //将该路径片段进行拼接
// console.log(p)
// console.log(path.join(__dirname,'../'))

//文件系统模块(fs)
//读取文件内容 异步fs.readFile() 同步fs.readFileSync()
const fs= require("fs");
// 异步读取  ('文件名'[,enconding编码],回掉函数(错误信息(error),文件读取后的内容))
//      代码还是一行一行解析，但是读取的时候会建立一个事件，等主线程有空的时候会从事件队列里面执行事件
//     fs.readFile('index.html', function(err, data) {
//         if (err) {
//             return console.error('以下是错误信息'+err);
//         }
//         console.log("异步读取成功，以下是内容: " + data.toString());
//     });
// 同步读取 ('文件名','编码')  从头到尾一步一步执行，文件没读取出来，下面的代码不执行
// var data = fs.readFileSync('index.html','utf-8');
// console.log("同步读取成功，以下是内容: " + data.toString());
// console.log("程序执行完毕。");
//打开文件 fs.open('路径','打开行为'[,'文件权限'],回调函数(err,文件内容))
// r	读取 如果文件不存在抛出异常      r+	读写如果文件不存在抛出异常。
// rs	同步的方式读取文件。             rs+	同步的方式读写。
// w	写入 如果文件不存在则创建。      wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
// w+	读写，如果文件不存在则创建。     wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
// a	追加 如果文件不存在则创建。      ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
// a+	读取追加 如果文件不存在则创建    ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
// fs.open('index.html','rs+','0666',function (err,fd) {
//     if(err){
//         return console.error(err);
//     }
//     console.log("文件打开成功！");
// });
//获取文件信息 异步模式  fs.stat('文件路径',回调函数(err,fs.Stats对象))
//fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
// stats.isFile()	        如果是文件返回 true，否则返回 false。
// stats.isDirectory()	    如果是目录返回 true，否则返回 false。
// stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
// stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
// stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
// stats.isFIFO()	        如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
// stats.isSocket()	        如果是 Socket 返回 true，否则返回 false。
// fs.stat('../node',function (err,stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("是否为目录(isDirectory): "+stats.isDirectory());
// })
//写入文件  异步模式 fs.writeFile(file, data[, options], callback)
//fs.writeFile('文件名或文件描述符','要写入文件的数据','对象options ',回调函数())
//          options包含  {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w''(会覆盖旧内容)
//     fs.writeFile('index.html','通过fs.writeFile写入的内容',function (err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("数据写入成功！");
//         console.log("--------我是分割线-------------")
//         console.log("读取写入的数据！");
//         fs.readFile('index.html', function(err, data) {
//                 if (err) {
//                     return console.error('以下是错误信息: '+err);
//                 }
//                 console.log("异步读取成功，以下是内容: " + data.toString());
//         });
//     });
//读取文件  异步模式 fs.read(fd, buffer, offset, length, position, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。   buffer - 数据写入的缓冲区。
// offset - 缓冲区写入的写入偏移量。  length - 要从文件中读取的字节数。
// position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
// callback  回调函数，三个参数 err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象
//关闭文件  异步模式 fs.close(fd, 回调函数，没有参数)
// fd - 通过 fs.open() 方法返回的文件描述符
//截取文件 异步模式 fs.ftruncate(fd, 文件内容截取的长度, 回调函数，没有参数)
//     fd - 通过 fs.open() 方法返回的文件描述符。
//     callback - 。
//         var buf = new Buffer(1024);
//         console.log("准备打开文件！");
//         fs.open('index.html', 'r+', function(err, fd) {
//             if (err) {
//                 return console.error(err);
//             }
//             console.log("文件打开成功！");
//             console.log("开始截取4字节");
//             // 截取文件
//             fs.ftruncate(fd, 4, function(err){
//                 if (err){
//                     console.log(err);
//                 }
//                 console.log("文件截取成功。");
//                 console.log("读取相同的文件");
//                 fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//                     if (err){
//                         console.log(err);
//                     }
//
//                     // 仅输出读取的字节
//                     if(bytes > 0){
//                         console.log(buf.slice(0, bytes).toString());
//                     }
//
//                     // 关闭文件
//                     fs.close(fd, function(err){
//                         if (err){
//                             console.log(err);
//                         }
//                         console.log("文件关闭成功！");
//                     });
//                 });
//             });
//         });
//删除文件 异步模式 fs.unlink(文件路径, 回调函数，没有参数)
//     console.log("准备删除文件！");
//     fs.unlink('index.txt', function(err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("文件删除成功！");
//     });
//      同步模式 fs.unlinkSync('文件路径')
//创建目录 异步模式 fs.mkdir(文件路径[,目录权限默认0777], 回调函数，没有参数)  同步 fs.mkdirSync()
//读取目录 异步模式 fs.readdir(文件路径, 回调函数，err 为错误信息，files 为 目录下的文件数组列表) 同步 fs.readdirSync()
// 删除目录 异步模式 fs.rmdir(文件路径, 回调函数，没有参数)  同步 fs.rmdirSync()
//     console.log("创建目录 mkdir");
//     fs.mkdir("mkdir",(err) => {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("目录创建成功。");
//     });
//     console.log("准备删除目录");
//     fs.rmdir("mkdir",function (err) {
//         if (err) {
//             return console.error(err);
//         }
//     });
//     console.log("查看 ../Node 目录");
//     fs.readdir("../Node",function(err, files){
//         if (err) {
//             return console.error(err);
//         }
//         files.forEach( function (file){
//             console.log( file );
//         });
//     });

//在当前目录下创建stuff目录,读取前目录下index.html，在stuff目录下创建index.html写入之前读取到的信息
//     fs.mkdir('stuff', function() {
//         fs.readFile('index.html', 'utf8', function(err, data) {
//             fs.writeFile('./stuff/index.html', data, function() {
//                 console.log('copy successfully');
//             })
//         })
//     });

let http = require('http');
let options = { // 用于请求的选项
    host: 'localhost',
    port: '1997',
    path: '/index.html'
};
let callback = function (response) { // 处理响应的回调函数
    let body = '';
    response.on('data',function (data) {
        body += data;
    });
    response.on('end',function () {
        console.log(body);
    });
};
let req = http.request(options,callback); // 向服务端发送请求
req.end();











