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

// 数组
  // js中数组是特殊对象,数组的键(索引)是数值类型
  // 模拟原生的数组接口,并使用[n: number]来作为索引签名类型
  // 只要number类型的键(索引)都可以出现在数组中,或者说数组可以有任意多个元素
  // 同时也符合数组索引时number类型这一前提
  interface MyArray<T> {
    [n: number]: T
  }
  let arr: MyArray<number> = [1, 2, 3] 