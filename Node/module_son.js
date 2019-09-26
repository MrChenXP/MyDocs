//exports对象把自己当作父对象，把a当作自己的方法作为模块的访问接口  这种方式能使用多次
// module.exports.a = function() {
//     console.log('Hello World');
// }

let adder = (a)=> {
    console.log(`${a}+PI=${a+pi}`) ;
}
let pi = 3.14;
let Hello = {
    counter: function(arr) {
        console.log("你写的数组有" + arr.length + " 个") ;
    },
    adder: adder,
    a: function () {
        var name;
        this.setName = function(thyName) {
            name = thyName;
        };
        this.sayName = function() {
            console.log('以下是你设置的名字：  ' + name);
        };
    }
}
module.exports = Hello; // 一个模块不能出现两个exports(供外面访问的接口)