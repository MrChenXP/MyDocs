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


declare var 声明全局变量
declare function 声明全局方法
declare class 声明全局类
declare enum 声明全局枚举类型
declare namespace 声明（含有子属性的）全局对象
interface 和 type 声明全局类型
export 导出变量
export namespace 导出（含有子属性的）对象
export default ES6 默认导出
export = commonjs 导出模块
export as namespace UMD 库声明全局变量
declare global 扩展全局变量
declare module 扩展模块
/// <reference /> 三斜线指令