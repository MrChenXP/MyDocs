// 第三方库如果没自带声明，可以从 DefinitelyTyped 下载声明(自行查询用法)
// 通过package.json--typings|types:'./index.d.ts'来指定加载的声明文件

// 导入项目内的声明 
    // 导入.js文件时,ts会自动加载与.js同名的.d.ts文件,以提供声明,不需要在import
    import {Props} from './index'
    let a: Props


// 模块
    var x =  ("foo");
    // module.d.ts 如果模块不能被调用或构造
    // module-class.d.ts 如果模块能够使用new来构造
        var y = new x("hello");
    // module-function.d.ts 如果模块能够作为函数调用
        var y = x(42);
    
// declare 
    // 用于类型声明，为其他地方已存在(比如.js文件)的变量声明类型，而不是创建一个变量
    // 对于type interface 等这些明确就是ts类型的，可以省略declare关键字
    // 对于let function等具有双重含义的，应该使用declare关键字,明确指定此处用于类型声明

    // import {All} from '泛型' // 报错,
    // 需要一个同名的.d.ts用declare对文件内的变量进行声明
    // 然后export


// 全局变量
declare var age: number; // 声明变量
declare const age2: number; // 只读
declare let age3: number; // 拥有块级作用域

// 全局函数
declare function qjhs(greeting: string): void; // 声明 函数

// 带属性的对象
declare namespace dsxddx {
    function hs1(s: string): string; // 对象内部的函数
    let sx1: number; // 对象内部的属性
}
// 函数重载 
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

// 可重用类型（接口）
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}
declare function greet(setting: GreetingSettings): void;

// 可重用类型（类型别名）·
type GreetingLike = string | (() => string) | MyGreeter;
declare function greet(g: GreetingLike): void;
declare namespace GreetingLib { // 使用命名空间组织类型。
    interface LogOptions {
        verbose?: boolean;
    }
    interface AlertOptions {
        modal: boolean;
        title?: string;
        color?: string;
    }
}
declare namespace GreetingLib.Options { // 创建嵌套的命名空间
    // Refer to via GreetingLib.Options.Log
    interface Log {
        verbose?: boolean;
    }
    interface Alert {
        modal: boolean;
        title?: string;
        color?: string;
    }
}

// 类
declare class Greeter {
    constructor(greeting: string);
    greeting: string;
    showGreeting(): void;
}



// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
/// <reference /> 三斜线指令