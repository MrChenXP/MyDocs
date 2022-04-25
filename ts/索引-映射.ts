/** ===========索引签名类型=========== */ 
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
// 数组
  // js中数组是特殊对象,数组的键(索引)是数值类型
  // 模拟原生的数组接口,并使用[n: number]来作为索引签名类型
  // 只要number类型的键(索引)都可以出现在数组中,或者说数组可以有任意多个元素
  // 同时也符合数组索引时number类型这一前提
  interface MyArray<T> {
    [n: number]: T
  }
  let arr: MyArray<number> = [1, 2, 3] 

/** ===========映射类型=========== */ 
// 基于旧类型创建新类型(对象类型)
  // in
  type PropKeys = 'x' | 'y' | 'z'
  type Type2 = { [Key in PropKeys]: number }
  // 基于索引签名类型
  // Key in PropKeys 表示key可以是PropKeys联合类型中任意一个 类似于forin(let k in obj)
  // 映射类型只能在类型别名中使用，不能在接口中使用

  // in keyof
  type Props = {a: number;b: string;c:boolean}
  type Type3 = {[Key in keyof Props]: number} // key为abc 类型都为number

  // 泛型工具类都是基于映射类型实现的
  type Partial2<T> = {
    [P in keyof T]?: T[P]
  }
  type Props2 = {a: number;b:string;c:boolean}
  type PartialProps = Partial2<Props2>
  // keyof T即keyof Props2表示获取Props2所有的键 abc
  // ？ 表示将这些属性变为可选 以此来实现Partial的功能
  // : 后面T[P]表示获取T每个键对应的类型（abc）
  // 最终新旧类型结构完全相同 只是变成可选了

/** ===========索引查询(访问)类型=========== */ 
  // 用来查询属性的类型 像上面的T[P]
  type Props3 = { a: number; b: string; c: boolean}
  type TypeA = Props3['a'] // TypeA = number
  // 同时查询多个
  type TypeB = Props3['a' | 'b'] // TypeB= number | string
  type TypeC = Props3[keyof Props3] // TypeC= number|string|boolean
