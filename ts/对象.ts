/** =========对象========= */
// 描述对象的结构：有什么类型的属性和方法
let person: { name: string } = { name: "jack" };

// 通过自定义类型 创建一个对象类型
type obj1 = {
  name: string;
  age?: number; // 可选属性
  sayHi(): void;
  greet(name: string): void;
  sayAge(age: number): number;
  sayName: ()=> void;
  getName: Function;
};

let myObj = (config: obj1): void => {} // 将创建好的类型使用在函数定义上