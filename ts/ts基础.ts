// npm install -g typescript下载插件
// tsc xxx.ts   将ts文件编译为js
// let const var 区别跟js一样
// ts js的超集.静态类型编译语言,先编译再执行.
// npm i -g ts-node 直接执行ts(内部也是先编译再执行) ts-node xxx.ts

/** ===========数据类型=========== */ 
// 基础数据类型 string boolean number symbol 枚举 any void undefined null
// string
    let email: string = "2256@qq.com"; // 字符串
    let msg: string = `my email is ${email}`; // 模板字符串
// boolean
    let isShow: boolean = false; // 布尔
// number
    // 都是浮点数,支持十进制,8进制,16进制,以及字面量
    let age: number = 20; // 数字 age="19"会报错，因为之前定义的是数字类型
// 数组
    let list: number[]=[1,2,3,4]; // 数组 里面的值必须是number类型
    let list2: any[]=["a",2,true]; // 数组 里面的值所有类型都可以
    let list3: Array<number> = [1,2,3];// 数组泛型方式创建数组
    let lits4: (string | number) [] = [1,'c']; // 联合类型的数组
// symbol
    let sym1: symbol = Symbol();
// 元祖
    //  元祖(Tuple)表示一个已知元素数量和类型的数组
    let list4: [string, number] = ["a",10]; // 数量和类型要已知
    // list4[1].substr(1); // 报错,因为第二项是数字,无字符串方法
// 枚举 
    // 枚举(enum) 值必须是列举出来的范围内
    enum Weeks{Mon,Tue = 4,Wed}; // enum 枚举名{枚举值...} 可以改变值得下标
    let day:Weeks = Weeks.Mon; // 变量名:枚举名 = 枚举集里的值
    day; // 0 此处返回的是Mon的下标
    Weeks[0]; // Mon 具体的值
    Weeks["Mon"]; // 0 下标
    Weeks["Tue"]; // 4 下标 之前就把下标改了
    Weeks["Wed"]; // 5 下标 前一个下标被改成了4，故它顺延为5
    let day2:string = Weeks[4]; // 可以直接用下标赋值
// any 任何类型都可以
    let any1:any= 1;
    let any2:any= true;
// void 无任何类型，一般是函数返回值
    function hello():void{
        // 这个函数就不能再return一个返回值了,因为之前定义了返回值为void
    }
    let uns1: void = undefined; // 一半void没啥用,因为只能赋值undefined,null
// undefined null 二者是任何类型的子类型,可以赋值给任何类型
    let und1:undefined = undefined // 值就只能是undefined
    let nud2:null = null; // 值只能是null
    let nud3:string = null; // 子类型 --strictNullChecks可以避免这个情况
// never 永不存在的类型
    // 1.总是会抛出异常或根本就不会有返回值 的 函数表达式或箭头函数表达式 的 返回值类型
    // 2.变量:被永不为真的类型保护所约束时
    // 3.never类型是任何类型的子类型,
    // 4.没有类型是never的子类型或可以赋值给never类型(除了never本身之外)(any也不行)
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message);
    }
    // 推断的返回值类型为never
    function fail() {
        return error("Something failed");
    }
    // 返回never的函数必须存在无法达到的终点
    function infiniteLoop(): never {
        while (true) {
        }
    }
// object 非原始类型
    let ojb1: object = {pro: 0};

// 类型别名 type 
    // 自定义类型,为任意类型起别名
    type CustomArray = (number | string)[]
    let ca1: CustomArray = [1,'c']
// 联合类型 |
    let l1: number | string | boolean; // 可以是数字 布尔 字符串
// 类型推论 
    // 未定义数据类型,会根据值来自动判断类型,后面赋其他类型会报错
    let l2 = 3; // 推论为number
    let l3; // 未赋值,推论为any类型
    function add(num1: number,num2: number) {
        // 推断函数返回值为number
        return num1 + num2;
    }
// 类型断言
    // as 跟类型转换相似,告诉编译器变量为什么类型
    let l4: number | string | boolean;
    // let strLength:number = l4.length 报错,l4可能是布尔类型,所以可能无length,ts会预判类型
    let l5: number | string | boolean = "this is a string";
    let strLen: number = l5.length; // l5已经被赋值成了字符串类型
    let strLen2: number = (<string>l5).length; // 将l5断言为string类型,
    let strLen3: number = (l5 as string).length; // 将l5断言为string类型 jsx中,只有这种as写法可以
    const aLink = document.getElementById('link')
    // aLink.href = 'www.baidu.com' // 报错,推断为所有dom公共的属性和方法
    const aLink2= document.getElementById('link') as HTMLAnchorElement;
    aLink2.href = 'www.baidu.com' // console.dir()打印dom元素，可知道dom元素的类型
// 类型注解 为函数或变量添加约束
    function fun1(person: string){
        return `传进来的参数只能是string`;
    }


