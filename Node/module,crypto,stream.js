//http://www.runoob.com/nodejs/nodejs-module-system.html

//模块系统(module)
    //可以相互调用 模块是Node应用程序的基本组成部分，文件和模块是一一对应的。
    // 一个Node.js文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展
    //创建模块 (包含原生模块和3种文件模块)
    //exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象
    let module_son = require('./module_son');    // 引入了当前目录(./)下的module-son文件 加载这个模块
    module_son.adder(3);
    module_son.counter(['a','b','c']);
    let a = new module_son.a();  //指向函数 module_son返回的是对象 a是对象的函数，要先用a里的方法就要实例化成对象
    a.setName('aaa');   //调用a里的方法
    a.sayName();   //调用a里的方法

//加密(Crypto)-------------------------------------------------------------------------------------
    let cry = require('crypto');    // 引入原生模块crypto 加密模块
    let pw = '321';     //创建一个需要加密的字段
    //crypto.createHash('加密方式',需要加密的字段) 创建并返回一个哈希对象，使用指定的算法来生成哈希摘要
    //Hash 类 用来生成数据的哈希值。
    //hash.update(data[, 编码方式])  更新哈希内容
    // hash.digest([encoding])  计算传入的数据的哈希摘要
    let s = cry.createHmac('sha256', pw)
        .update('secret')
        .digest('hex');
    // console.log(s);


//流 管道-------------------------------------------------------------------------------------
//mac linux: ls查看当前目录下有哪些文件和文件夹 ls|grep app 查看带有app关键字的东西    //windows: dir|findstr app
//dir输出了一个流 并作为一个findstr app的输入   可以：dir|findstr Express|findstr index
//对http请求是用流来实现的  请求是一个输入的流 响应是个输出的流
//所有流都是EventEmitter的实例
//流可以处理数据(高性能) 将数据放入buffer(缓存区)中 一边放一边处理

let fs = require("fs");
//创建一个读的流(输入流) 读取参数的文件 (‘地址’,编码格式(没写就不编码，就是一些buffer))
    let crs = fs.createReadStream(__dirname+'/index.html','utf-8');
//创建一个写的流
//     let cws = fs.createWriteStream(__dirname + '/index2.html');
//编码的另一个写方式
//  let crs = fs.createReadStream(__dirname+'/index.html');
//  crs.setEncoding("utf-8");
    let data = "";
// //data 读取事件 当有数据可读时触发
//     crs.on('data', (chuck) => {
//         data += chuck; //将读到的数据赋值给data
//         //cws.write(chuck);   //将读到的数据传到index2.html上(没有就创建)
//     });
//end 读取完毕后事件 没有更多的数据可读时触发
//     crs.on('end',() => console.log(data) );
//error 在接收和写入过程中发生错误时触发
    crs.on('error',(err) => console.log(err.stack));
//写入流的另一种写入方式
//     cws.write("xxxx");  //写入数据
//     cws.end();  //代表写入的过程个已经结束了
//     //设置监听方法 结束后的监听方法 所有数据已被写入到底层系统时触发
//     cws.on('finish', () => console.log("写入结束") );

//管道流  方法实现 读取信息并把读取的信息写入新文本 读取流.pipe(写入流)
//    crs.pipe(cws);
//链式流  通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作
const zlib = require('zlib');
// 压缩index.html 文件为 input.txt.gz
//     crs         //引用之前的读取流 并把该传递到下一流中
//     .pipe(zlib.createGzip())    //将获取的流压缩 并把该传递到下一流中
//     .pipe(fs.createWriteStream('input.txt.gz')); //将获取的流写入
