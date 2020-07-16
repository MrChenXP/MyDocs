/** 接口 interface */
// 接口定义 约束key名和value数据类型
// ? 可选属性
// readonly 只读属性
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
        // console.log(n) // name:a age:19
    }
    showData({name:"a",age:19})

/** 类 */
// 定义 class
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
    let stu1 = new Student("jane","M.","User"); // 新建一个类实例
    fun2(stu1); // 类可以和接口一起使用,把实例传到函数,接口会对实例(参数)进行约束
// 继承 extends
    class StudentSon extends Student{
        cardnumber: string;
        school: string;
        constructor(cardnumber:string, school: string){
            super("jane","M.","User"); // 构造父类的参数
            this.cardnumber = cardnumber;
            this.school = school;
        };
        dohomework(){
            return this.firstName + this.cardnumber;
        }
    }

    let stu2 = new StudentSon("1001", "二中");
// 接口的继承
    interface jk1{
        getmsg();
    }
    interface jk1son extends jk1{
        printing();
    }
    // class 类名 implements 接口1 接口2{...} 可以用接口来约束类，而且可以同时使用多个接口
    class cl1 implements jk1son{
        getmsg(){
            console.log(`this getmsg`)
        }
        printing(){
            console.log(`this printing`)
        }
    }

/** 访问修饰符 */
// public 默认,公共
// private 私有的,不能在声明它的类的外部访问
// protected 受保护的,与private修饰符的行为很相似，protected成员在派生类(子类)中仍然可以访问
    class xsf1{
        public name: string;
        private age: string;
        protected id: string;
        constructor(name: string, age: string, id: string){
            this.name = name;
            this.age = age;
            this.id = id;
        }
        getAgeId(){
            return `${this.age}--${this.id}`; // private protected都可以类的内部访问
        }
    }
    let xsfSl = new xsf1("tai", "19", "001");
    // xsfSl.age // 报错,private修饰符不允许类外部访问
    // xsfSl.id // 报错,protected修饰符不允许类外部访问
    class xsf1son extends xsf1{
        show(){
            this.name; // public 属于公共的
            // this.age; // 报错,private不能在声明它的类的外部访问
            this.id; // protected可以在派生类(子类)中访问
        }
    }
    let xsfSl2 = new xsf1son("jin", "20", "002");

/** 静态属性和静态方法 */