// npm install -g typescript下载插件
// tsc xxx.ts   将ts文件编译为js
// let const var 区别跟js一样

/** 数据类型 */ 
// 基础数据类型 string boolean number 枚举 any void undefined null
    let email:string = "2256@qq.com"; // 字符串
    let msg:string = `my email is ${email}`; // 模板字符串
    let isShow:boolean = false; // 布尔
    let age:number = 20; // 数字 age="19"会报错，因为之前定义的是数字类型
    let list:number[]=[1,2,3,4]; // 数组 里面的值必须是number类型
    let list2:string[]=["a","b","c"]; // 数组 里面的值必须是string类型
    let list3:[string,number]=["a",10]; // 元祖 第一个是string,第二个是number
    // 枚举 值必须是列举出来的范围内
    enum Weeks{Mon,Tue,Wed}; // enum 枚举集{枚举值1}
    let day:Weeks = Weeks.Tue; // 变量名:枚举名 = 枚举集里的值
    day; // 0
    Weeks[0]; // Mon
    Weeks["Mon"]; // 0
    // Any 任何类型都可以
    let any1:any= 1;
    let any2:any= true;
    // void 无任何类型，一般是函数返回值
    function hello():void{
        // 这个函数就不能再return一个返回值了，因为之前定义了无返回类型
    }
    function hello2():string{
        return `这里必须返回字符串,因为之前定义了`
    }
    // undefined null 一般不用
    let und1:undefined = undefined // 值就只能是undefined
    let nud1:null = null; // 值只能是null
// 联合类型
    let l1:number | string | boolean; // 可以是数字 布尔 字符串
// 类型推论 
    let l2=3; // l2="a"报错 未定义数据类型,会根据值来自动判断类型,后面赋其他类型会报错
    let l3; // 未赋值,推论为any类型
// 类型断言 跟类型转换相似,告诉编译器变量为什么类型
    let l4:number | string | boolean;
    // let strLength:number = l4.length 报错,l4可能是布尔类型,所以可能无length,ts会预判类型
    let l5:number | string | boolean = "this is a string";
    let strLen:number = l5.length; // l5已经被赋值成了字符串类型
    let strLen2:number = (<string>l5).length; // 将l5断言为string类型,
    let strLen3:number = (l5 as string).length; // as写法，将l5断言为string类型
// 类型注解 为函数或变量添加约束
    function fun1(person: string){
        return `传进来的参数只能是string`;
    }

/** 接口 */
    interface Person{ // 创建一个接口 约束key名和value数据类型
        firstName: string;
        lastName: string;
    }
    function fun2(val: Person){ // 参数注解，按照Person接口来约束
        return `参数只要符合Person接口就行${val.firstName} ${val.lastName}`;
    }
    fun2({firstName: "Jane", lastName: "User" }) //传参的时候,key和value类型要相同

/** 类 */
// 跟es6相识
    class Student{
        funllName: string;
        // 使用public等于创建了同名的成员变量
        constructor(public firstName, public mid, public lastName){
            this.funllName = firstName + mid + lastName;
        }
    }
    let user = new Student("jane","M.","User"); // 新建一个类实例
    fun2(user); // 类可以和接口一起使用,把实例传到函数,接口会对实例(参数)进行约束
