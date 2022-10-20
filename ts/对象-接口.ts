/** =========对象========= */
    // 描述对象的结构：有什么类型的属性和方法
    let person: { name: string } = { name: "jack" };
// 通过自定义类型 创建一个对象类型
    type objType = {
    name: string;
    age?: number; // 可选属性
    sayHi(): void;
    greet(name: string): void;
    sayAge(age: number): number;
    sayName: () => void;
    getName: Function;
    };
    let myObj = (config: objType): void => {}; // 将创建好的类型使用在函数定义上

/** =========接口interface========= */
// 接口定义 约束key名和value数据类型 给对象用的
    interface Person {
        name?: string; // ? 可选属性
        readonly age?: string; // readonly 只读属性
        firstName: string; // key一定要是firstName,值一定要是string类型
        getName(msg: string): string; // 一定要有一个方法是getName,参数一定是string,返回值一定是string
        getAge?: ()=>void;
        getFirstName?: Function;
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
    interface ImyFunction {
        (a: string, b: number): boolean; // 对参数和返回值约束
    }
    let ys1: ImyFunction;
    ys1 = function (a: string, b: number) {
        return false;
    };
// 对数组进行约束
    interface IStatus {
        [index: number]: string; // 值必须是字符串
    }
    let ys2: IStatus;
    ys2 = ['aaa', 'bbb'];
// json
    interface IData {
        name: string; // 对key名和value数据类型进行约束
        readonly age: number; // 只读属性 不能修改
        email?: string; // 可选属性，不一定要传
    }
    function showData(n: IData) {
        // console.log(n) // name:a age:19
    }
    showData({ name: 'a', age: 19 });
// 继承 extends
    // 如果有相同的属性和方法,可以将公共的属性或方法抽离出来,通过继承实现复用
    interface Point2D {
        x: number;
        y: number;
    }
    interface Point3D extends Point2D {
        z: number;
    }
    let myObj3: Point3D = { x: 1, y: 2, z: 3 };