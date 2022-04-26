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
  interface Person { name: string }
  type PersonDetail = Person & Point2D
  let obj: PersonDetail = {
    x: 2,
    y: 3,
    name: 'jack'
  }
  let obj2: Person & Point2D = {
    x: 2,
    y: 3,
    name: 'jack'
  }
  // 不同点：对于同名属性，处理类型冲突的方式不同
  interface A { a: number }
  // interface B extends A { a: string} 报错 a类型不兼容
  interface B { a: string}
  type C = A & B // 不报错 理解为 C = { a: number | string }