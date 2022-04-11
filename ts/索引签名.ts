// 索引签名类型
  // 当无法确定对象中有哪些属性，或者对象可以出现任意多个属性
  // [key: string]来约束属性名称
  // obj可以出现任意多个属性
  // key只是个占位符,可以任意变量名称
  // js对象({})的键是string类型
  interface AnyObject {
    [key: string]: number
  }
  let obj: AnyObject = {
    a: 1,
    b: 2,
    2: 3,
  }

// js中数组是特殊对象,数组的键(索引)是数值类型
interface MyArray<T> {
  [n: number]: T
}
let arr: MyArray<number> = [1, 2, 3]