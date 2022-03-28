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

/** =========接口 interface========= */
// 当一个对象类型被多次使用时,一般会使用接口interface来描述对象的类型,打到复用的目的
interface IPerson {
  name: string;
  age?: number; // 可选属性
  sayHi?(): void;
  greet?(name: string): void;
  sayAge?(age: number): number;
  sayName?: () => void;
  getName?: Function;
}
let myObj2: IPerson = { name: "jack" };
// 接口interface和类型别名type的对比
// -都可以给对象指定类型
// *接口，只能为对象指定类型
// *类型别名，不仅可以给对象指定类型，实际可以给任意类型制定别名

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
