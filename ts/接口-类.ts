/** =========接口interface========= */
// 接口定义 约束key名和value数据类型
// ? 可选属性
// readonly 只读属性
interface Person {
    name?: string,
    readonly age?: string,
    firstName: string; // key一定要是firstName,值一定要是string类型
    getName(msg: string): string; // 一定要有一个方法是getName,参数一定是string,返回值一定是string
}
function fun2(val: Person) {
    // 参数注解，按照Person接口来约束
    return `参数只要符合Person接口就行${val.firstName} ${val.getName}`;
}
fun2({
    firstName: 'Jane',
    getName(msg: string) {
        return msg;
    },
}); //传参的时候,要按照约束来

// 对函数进行约束
interface Imyfunction {
    (a: string, b: number): boolean; // 对参数和返回值约束
}
let ys1: Imyfunction;
ys1 = function (a: string, b: number) {
    return false;
};
// 对数组进行约束
interface Istuarr {
    [index: number]: string; // 值必须是字符串
}
let ys2: Istuarr;
ys2 = ['aaa', 'bbb'];
// json
interface Idata {
    name: string; // 对key名和value数据类型进行约束
    readonly age: number; // 只读属性 不能修改
    email?: string; // 可选属性，不一定要传
}
function showData(n: Idata) {
    // console.log(n) // name:a age:19
}
showData({ name: 'a', age: 19 });


/** =========类========= */
// 定义 class
    class Student {
        fullName: string; // 定义这个类的变量
        mid: string;
        gender = '男';
        // 构造函数
        constructor(public firstName, mid, public getName, gender2) {
            // 接收传递过来的参数 构造函数不能有返回值
            // 使用public等于创建了同名的成员变量
            this.mid = mid; // 对变量进行赋值 
            this.gender = gender2 // 传过来的gender2赋值class的gender
            this.fullName = this.setFull(); // 这里使用函数返回值进行赋值
        }
        // 定义实例方法
        setFull(n?: string): string {
            return this.firstName + this.mid + this.getName + n;
        }
    }
    let stu1 = new Student('jane', 'M.', 'User', 'jack'); // 新建一个类实例
    stu1.gender // jack
    stu1.fullName // janeM.User
    stu1.setFull('Tar') // janeM.UserTar
    fun2(stu1); // 类可以和接口一起使用,把实例传到函数,接口会对实例(参数)进行约束
// 继承 extends 
    // 继承父类
    class StudentSon extends Student {
        cardNumber: string;
        school: string;
        constructor(cardNumber: string, school: string) {
            super('jane', 'M.', 'User','jack'); // 构造父类的参数
            this.cardNumber = cardNumber;
            this.school = school;
            this.gender // '男' 继承自父类
        }
        doHomeWork() {
            return this.firstName + this.cardNumber;
        }
    }
    let stu2 = new StudentSon('1001', '二中');
// 继承 implements
    interface jk1 {
        getMsg();
    }
    interface jk1son extends jk1 {
        printing();
    }
    interface jk2 {
        name: string
    }
    // 实现接口
    class cl1 implements jk1son,jk2 {
        // 可以用接口来约束类，而且可以同时使用多个接口
        name: string
        getMsg() {
            return this.name
        }
        printing() {
            return this.name
        }
    }
// 访问修饰符
    class xsf1 {
        public name: string; // public 默认,公共
        private age: string; // private 私有的,不能在声明它的类的外部访问
        protected id: string; // protected 受保护的,在派生类(子类)中仍然可以访问
        readonly sex: string; // readonly 只读 用来防止在构造函数之外对属性进行赋值,只能修饰属性不能修复方法
        readonly sex1: string = '女';
        readonly sex2 = '女'; // 只读 且 是字面量类型
        constructor(name: string, age: string, id: string) {
            this.name = name;
            this.age = age;
            this.id = id;
            this.sex = '男'
            this.sex1 = '男' 
            // this.sex2 = '男' // 报错 字面量类型不可重新赋值
        }
        getAgeId() {
            // this.sex = '中性' 报错 只读属性
            return `${this.age}--${this.id}`; // private protected 都可以被类的内部访问
        }
    }
    let xsfSl = new xsf1('tai', '19', '001');
    // xsfSl.age // 报错 private 修饰符不允许类外部访问
    // xsfSl.id // 报错 protected 修饰符不允许类外部访问
    class xsf1son extends xsf1 {
        show() {
            this.name; // public 属于公共的
            // this.age; // 报错 private 不能在声明它的类的外部访问
            this.id; // protected 可以在派生类(子类)中访问
        }
    }
    let xsfSl2 = new xsf1son('jin', '20', '002');

/** 静态属性和静态方法 */
// js的静态属性和静态方法
function Jt() {
    this.name = 'yan'; // 实例属性
    this.print = function () {}; // 实例方法
}
Jt.name2 = 'zheng'; // 静态属性
Jt.print2 = function () {}; // 静态方法
Jt.print2(); // 调用静态方法 静态属性调用方式与其一样
let jtsl = new Jt();
jtsl.print(); // 调用实例方法,得先new一个实例
// ts的静态属性和方法
class Jt2 {
    name: string; // 实例属性
    constructor(name: string, age: string, id: string) {
        this.name = name;
        Jt2.age = age; // 静态属性不能通过this获取,得用类名
    }
    getName() {} // 实例方法
    static age: string; // 静态属性
    static showAge() {
        // 静态方法
        return Jt2.age; // 静态属性不能通过this获取,得用类名
    }
}
Jt2.age; // 类外部，调用类静态属性 想调用实例方法属性，得new一个实例
Jt2.showAge(); // 类外部，调用类静态方法
/** 多态 */
// 父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
class Animal {
    eat() {
        console.log('animal eat');
    }
}
class Cat extends Animal {
    eat() {
        return `this is cat`;
    }
}
class Dog extends Animal {
    eat() {
        return `this is dog`;
    }
}
let chi1 = new Cat();
chi1.eat();

/** 抽象类abstract、抽象方法 */
// 抽象类做为其它派生类的基类(父类)使用,一般不会直接被实例化
// 抽象方法只能包含再抽象类中,抽象类可包含抽象方法和普通方法
// 子类继承抽象类,实现抽象方法
abstract class Cxl {
    // 抽象类
    abstract eat(); // 不能实现,因为是抽象方法
    run() {
        return `this run`;
    } // 普通方法
}
class Cxl2 extends Cxl {
    eat() {
        return `this eat`;
    } // 一定要实现这个方法,因为是抽象方法,除非把这个子类本身也变成抽象类
}
