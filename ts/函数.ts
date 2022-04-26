/** ===========函数=========== */
// 定义 实际给函数的参数和返回值加类型
    function add(x: number, y: number): number {
        return x + y;
    }
// 默认参数 ?可选参数  匿名函数
    let add1 = function (x: number = 20, y?: number): void {
        // 一个参数不能同时是默认和可选
        // 可选参数只能出现在必选参数后面
        // 匿名函数 空返回值类型
        x + y; // 无返回类型,所以不能return
    };
// 剩余参数
    let add2 = function (x: number, ...arr: number[]) {
        arr; // [2,3,4,5]
    };
// 将函数声明交给变量进行声明
    let add3: (x: number, y: string) => number = (x, y) => {
        return x;
    };
    let sum = add2(1, 2, 3, 4, 5);