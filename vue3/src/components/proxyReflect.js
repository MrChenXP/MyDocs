/**======== 比较Vue2与Vue3的响应式 ========*/
// vue2
//   核心:
//      对象: 通过 defineProperty 对对象的已有属性值的,读取和修改进行劫持(监视/拦截)
//      数组: 通过重写数组,更新数组一系列更新元素的方法,来实现元素修改的劫持
//   问题
//      对象直接新添加的属性或删除已有属性, 界面不会自动更新
//      直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] ={}
//  解决
//   Vue.set(target,key,val) Vue.$set(target,key,val)
let obj = {};
Object.defineProperty(obj, 'name', {
  // get() {},
  // set() {},
});
// this.$set(this._data.listData, 'fiscalYear',fiscalYear )
// this.$set(this._data.arr, 3, 'arr')
// this.$set(this.listData, 'fiscalYear',fiscalYear )
// this.$set(this.arr, 3, 'arr')
// Vue3
//   核心:
//     通过Proxy(代理): Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）
//     通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
//         Reflect将对象的一些明显属于语言内部的方法,放到Reflect对象上。通过Reflect对象可以直接拿到语言内部的属性和方法
//   
//   文档:
//   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
const user = { name: 'John', age: 12 };
// proxyUser是代理对象, user是被代理对象,后面所有的操作都是通过代理对象来操作被代理对象内部属性
const proxyUser = new Proxy(user, {
  // 拦截读取属性值 目标对象 被获取的属性名
  get(target, prop) {
    console.log('劫持get()', prop);
    return Reflect.get(target, prop);
  },
  // 拦截设置属性值或添加新属性 目标对象被获取的属性名 新属性值
  set(target, prop, val) {
    console.log('劫持set()', prop, val);
    return Reflect.set(target, prop, val); // (2)
  },
  // 拦截删除属性
  deleteProperty(target, prop) {
    console.log('劫持delete属性', prop);
    return Reflect.deleteProperty(target, prop);
  },
});
// 读取属性值 目标对象 被获取的属性名
console.log(proxyUser === user); // false
console.log(proxyUser.name, proxyUser.age); // 运行劫持方法
// 设置属性值
proxyUser.name = 'bob';
proxyUser.age = 13;
console.log(user); // 被劫持了, 修改了user对象
// 添加属性
proxyUser.sex = '男';
console.log(proxyUser); // 多了个sex
console.log(user); // 与proxyUser一样,多了个sex
// 删除属性
delete proxyUser.sex;
console.log(user); // 删除了sex
