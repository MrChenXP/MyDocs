/** 接口 interface */
// 接口定义 约束key名和value数据类型
    interface Person{
        firstName: string; // key一定要是firstName,值一定要是string类型
        getName(msg:string):string; // 一定要有一个方法是getName,参数一定是string,返回值一定是string
    }
    function fun2(val: Person){ // 参数注解，按照Person接口来约束
        return `参数只要符合Person接口就行${val.firstName} ${val.getName}`;
    }
    fun2({firstName: "Jane", getName(msg:string){return msg} }) //传参的时候,要按照约束来

// 对函数进行约束
    interface Imyfunction{
        (a:string,b:number):boolean; // 对参数和返回值约束
    }
    let ys1:Imyfunction;
    ys1 = function(a:string,b:number){
        return false;
    }
// 对数组进行约束
    interface Istuarr{
        [index:number]:string; // 值必须是字符串
    }
    let ys2:Istuarr;
    ys2 = ["aaa","bbb"];
// json
    interface Idata{ 
        name:string, // 对key名和value数据类型进行约束
        readonly age:number // 只读属性 不能修改
        email?:string // 可选属性，不一定要传
    }
    function showData(n:Idata){
        console.log(n)
    }
    showData({name:"a",age:19})

/** 类 */
// 跟es6相识
    class Student{
        funllName: string; // 定义这个类的变量 
        mid: string;
        // 使用public等于创建了同名的成员变量
        constructor(public firstName,mid, public getName){ // 接收传递过来的参数
            // 对变量进行赋值
            this.mid = mid; 
            this.funllName = this.setFunll(); // 这里使用函数返回值进行赋值
        }
        // 定义方法
        setFunll():string{
            return this.firstName + this.mid + this.getName;
        }

    }
    let user = new Student("jane","M.","User"); // 新建一个类实例
    fun2(user); // 类可以和接口一起使用,把实例传到函数,接口会对实例(参数)进行约束
// class 类名 implements 接口1 接口2{...} 可以用接口来约束类，而且可以同时使用多个接口
