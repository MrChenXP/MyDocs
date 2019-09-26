//http://www.runoob.com/nodejs/nodejs-event-loop.html
//事件驱动模型(非阻塞式IO或者事件驱动IO) 当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。
//         当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
//在 Node，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数
let events = require("events"); //引入事件模块

// let myEmitter = new events.EventEmitter();//新建一个事件对象
//给事件对象绑 定监听函数 a.on('事件名称'，{事件发生后的回掉函数})
//  myEmitter.on('someEvent', function(message) {
//     console.log(message);
//  });
// //触发事件 xxx.emit('事件名称','传参')
// myEmitter.emit('someEvent', '这里手动触发了someEvent事件');

let util = require('util'); //引入工具模块
let Person = function(name) {
    this.name = name
};
//inherits继承 让Person继承events.EventEmitter类 这样给Person就是一个事件对象了   常用方法
    util.inherits(Person, events.EventEmitter);
//新建3个对象
    let xiaoming = new Person('xiaoming');
    let lili = new Person('lili');
    let lucy = new Person('lucy');
//把对象放过入一个数组中
    let person = [xiaoming, lili, lucy];
//循环数组，给每个对象绑定speak事件
    person.forEach(function(person) {
        person.on('speak', function(message) {
            console.log(person.name + " 说了以下话： " + message);
        })
    });

    xiaoming.emit('speak', 'hi');
    lucy.emit('speak', 'I want a curry');

//EventEmitter类
//     Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。
//     EventEmitter 的核心就是事件触发与事件监听器功能的封装
//     只要是支持事件响应的核心模块都是 EventEmitter 的子类。
// 创建 eventEmitter 对象
    let eventEmitter = new events.EventEmitter();
//方法
//     //为指定事件添加一个监听器到监听器数组的尾部。
//         addListener('事件名', 回调函数);
//     // 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
//         on('事件名', 回调函数);
//         server.on('connection', function (stream) {
//             console.log('这是回调函数内!');
//         });
//     // 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
//         once('事件名', 回调函数);
//         server.once('connection', function (stream) {
//             console.log('Ah, we have our first user!');
//         });
//     // 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
//         removeListener('事件名', 回调函数);
//         let callback = function(stream) {
//             console.log('someone connected!');
//         };
//         server.on('connection', callback);
//         server.removeListener('connection', callback);
//     // 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
//         removeAllListeners([event])
//     // 默认情况下，EventEmitters如果添加监听器超过10个就会输出警告信息。setMaxListeners函数用于提高监听器的默认限制的数量
//         setMaxListeners(n)
//     // 返回指定事件的监听器数组。
//         listeners('事件名')
//     // 按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
//         emit('事件名',参数1, 参数1, 更多参数);
//     //返回指定事件的监听器数量。
//         listenerCount(emitter, '事件名');


//Error事件
//EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件
// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃
eventEmitter.emit('error'); //这样就会显示错误信息

















