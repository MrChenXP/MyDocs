// 交叉类型 &
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