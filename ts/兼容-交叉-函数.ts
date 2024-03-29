
/** ===========函数=========== */
// 定义 实际给函数的参数和返回值加类型
  function add(x: number, y: number): number {
    return x + y;
  }
// 将函数声明交给变量进行声明
  let fun4: (x: number, y: string) => number = (x, y) => {
    return x;
  };
// 默认参数 ?可选参数  匿名函数 剩余参数
  let fun3 = function (x: number = 20, y?: number,...arr:number[]): void {
    // 一个参数不能同时是默认和可选
    // 可选参数只能出现在必选参数后面
    x + y; // 匿名函数 空返回值类型 // 无返回类型,所以不能return
  };
// 函数重载
  // 函数名相同,而形参不同的多个函数
  function add5 (x: string, y: string): string
  function add5 (x: number, y: number): number // 会把下面的函数声明ts注释给重载掉
  function add5(x: string | number, y: string | number): string | number {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }
  console.log(add5(1, 2))
  console.log(add5('a', 'b'))
  // console.log(add(1, 'a')) // 报错 因为上面定义了,要么xy都为string,要么都为number

/** ===========类型兼容性=========== */ 
// 两个对象具有相同结构，则认为他们属于同一类型
  class Point {x: number; y: number}
  class Point2D {x: number; y: number}
  class Point3D {x: number; y: number; z: number}
  const p: Point = new Point2D() // 相同结构
  const p1: Point = new Point3D() // 多的可以兼容少的
  // const p2: Point3D = new Point() // 报错
// 接口
  interface Student {x: number}
  interface StudentHight {x: number}
  let s1: Student
  let s2: StudentHight = s1
  interface StudentMax {x: number; y: number}
  let s3: StudentMax
  s2 = s3
  // s3 = s2 报错 多的不兼容少的
// 函数
  // 考虑：参数个数 参数类型  返回值类型 
  // 参数多的兼容参数少的（参数少的可以赋值给多的）
  type F1 = (a: number) => void
  type F2 = (a: number, b: number) => void
  let f1: F2
  let f2: F2 = f1 // 多的兼容少的
  // 相同位置的参数类型要相同(原始类型)或兼容(对象类型)
  type F3 = (a: number) => string
  type F4 = (a: number) => string
  let f3: F3
  let f4: F4 = f3 // 相同位置类型相同
  interface Point2D {x: number}
  interface Point3D {x: number; y: number}
  type F5 = (p: Point2D) => void
  type F6 = (p: Point3D) => void
  let f5: F5
  let f6: F6 = f5 // 兼容对象 少的可以赋值给多的
  // f5 = f6 报错 
  // 返回值只需关注类型本身即可

//  =========交叉类型 & =========
// 类似接口继承,用于组合多个类型为一个类型(常用于对象类型)
  interface Point2D { x: number; y: number; }
  interface PersonJX { name: string }
  type PersonDetail = PersonJX & Point2D
  let objJX: PersonDetail = {
    x: 2,
    y: 3,
    name: 'jack'
  }
  let obj2: PersonJX & Point2D = {
    x: 2,
    y: 3,
    name: 'jack'
  }
  // 不同点：对于同名属性，处理类型冲突的方式不同
  interface A { a: number }
  // interface B extends A { a: string} 报错 a类型不兼容
  interface B { a: string}
  type C = A & B // 不报错 理解为 C = { a: number | string }
