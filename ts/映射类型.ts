// 映射类型
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