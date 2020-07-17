/** 函数 */
// 定义
    function add(x: number, y: number): number{
        return x + y;
    }
    // 默认参数 ?可选参数(一般放在末尾)  (一个参数不能同时是默认和可选)
    let add1 = function(x: number = 20, y?: number): void{ // 匿名函数
        x + y; // 无返回类型,所以不能return
    }
    // 剩余参数
    let add2 = function(x: number, ...arr: number[]){
        arr; // [2,3,4,5]
    }
    let sum = add2(1,2,3,4,5)
// 函数的重载
    // 相当于重名名函数，后面的覆盖前面的


