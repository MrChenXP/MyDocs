/**
 * Created by Administrator on 2018/03/05.
 */
//var a = 12;
//function show(){
//    "use strict";
//    alert("aaa");
//}

//第一种方式
//export var a = 12;
//export var b = 13;
//export function show(){
//    "use strict";
//    alert("aaaa");
//}

//第二种方式
var a = 12;
var b = 13;
function show(){
    "use strict";
    return "aaa";
    //export var c = "14";        //报错 export命令可以出现在模块的任何位置，只要处于模块顶层就可以
}

export {a, b, show as s};

//错误
//    export 1;       //不能用export输出常量
//    var a = 12;
//    export a;
