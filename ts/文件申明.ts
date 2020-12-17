// 针对模块有三种可用的模块，
    var x = require("foo");
// module.d.ts 如果模块不能被调用或构造
// module-class.d.ts 如果模块能够使用new来构造
    var y = new x("hello");
// module-function.d.ts 如果模块能够作为函数调用
    var y = x(42);
    

// 全局变量
declare var qjbl: number; // 声明变量
declare const qjbl2: number; // 只读
declare let qjbl3: number; // 拥有块级作用域

// 全局函数
declare function qjhs(greeting: string): void; // 声明函数

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

// 可重用类型（类型别名）
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