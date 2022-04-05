/** 泛型 广泛的类型*/
// <T> T表示类型参数的类型变量 泛型就是类型参数化，处理的数据类型不是固定的，而是可以作为参数传入 
// 泛型把类型作为了参数来使用

// 泛型函数 identity 泛型函数，因为它可以适用于多个类型
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
printer<number>([1, 2, 3]); // 明确的指定了T是number类型，并做为一个参数传给函数
printer(['1', '2', '3']); // 利用了类型推论 -- 编译器会根据传入的参数自动地帮助我们确定T的类型

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
    (x: T, y: T): T;
}
let ad: Iadd<number>;
ad = function (x: number, y: number) {
    return 11;
};
