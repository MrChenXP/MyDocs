/** 泛型 广泛的类型*/
// <T> T表示类型参数的类型变量 泛型就是类型参数化，处理的数据类型不是固定的，而是可以作为参数传入 
// 泛型把类型作为了参数来使用

// 泛型函数 
    // identity 泛型函数，因为它可以适用于多个类型
    function identity<T>(arg: T): T {
        // 类型变量T T帮助我们捕获用户传入的类型 后面我们再次使用了 T当做返回值类型
        // arg.length;  // Error: T doesn't have .length 因为T表明任何类型都可以而某些类型是没有长度的 可参考printer泛型
        return arg;
    }
    function printer<T>(arr: T[]): void {
        for (let item of arr) {
            console.log(item);
        }
    }
    printer<number>([1, 2, 3]); // T指定为number,并做为一个参数传给函数
    printer(['1', '2', '3']); // 简化调用泛型函数 利用了类型推论,编译器会根据传入的参数自动地帮助我们确定T的类型

// 泛型约束
    function id<Type>(value: Type): Type {
        // value.length; 报错,Type为任意类型,无法保重拥有length属性
        return value
    }
    // 添加约束,收缩类型(缩窄类型取值范围)
    // 1. 指定更加具体的类型
    function id2<Type> (value: Type[]){
        value.length
    }
    // 2. 添加约束 extends
    interface ILength { length: number} // 创建描述约束的接口ILength 该接口要求提供length属性
    function id3<Type extends ILength> (value: Type) {
        // 通过extends关键字使用该接口 为泛型(类型变量)添加约束
        // 该约束表示：传入的类型必须具有length属性
        value.length
    }

// 多个泛型变量
    function getProp<Type, Key extends keyof Type> (obj: Type, key: Key) {
        // keyof 接受一个对象类型,生成其键名称的联合类型 'name'|'age'
        // 类型变量Key受Type约束,key只能是Type所有键中的任意一个,或者说只能访问对象中存在的属性
        return obj[key]
    }
    let person = {name: 'jack', age: 18}
    getProp(person, 'name')
    // getProp(person, 'name2') 报错 已经识别为 name|age 并没有name2属性 

// 数组本身就是泛型
    const strS = [1, '34', false]
    strS.forEach((el)=>{
        el // 自动识别 number string boolean
    })

// 泛型类
    class myArrayList<Type> {
        public name: Type;
        public list: Type[] = [];
        add(val: Type): void {
            this.list.push(val);
        }
    }
    let arr = new myArrayList<number>();
    arr.add(11);
    // arr.add('22'); 报错,指定了number类型
    console.log(arr.list);

// 泛型接口
    interface Iadd<T> {
        // name?: T;
        id?: (value: T) => T;
        ids?: ()=> T[];
        (x: T, y: T): T; // 一个function
    }
    let ad: Iadd<number>;
    ad = function (x: number, y: number) {
        return 11;
    };
