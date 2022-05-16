<template>
  <div>{{ count }}</div>
  <button @click="updateCount">修改</button>

  <div>{{JSON.stringify(state)}}</div>
  <div>{{JSON.stringify(obj)}}</div>
  <button @click="update">修改</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {},
  // 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
  // setup是组合api的入口函数
  setup() {
  // 变量
    let count0 = 0; // 此时的数据并不是响应式的数据(数据变化,页面跟着渲染变化)
     // ref 创建一个包含响应式数据的引用(reference)对象
    let count = ref(0); // 一般用来定义一个基本类型的响应式数据
     // 方法
    function updateCount() {
      // count++ 报错 因为count是一个ref对象,不能进行计算
      count.value++;
    }


    // reactive 定义多个数据的响应式
     // 接收一个普通对象然后返回该普通对象的响应式代理器对象 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
            // 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式
    const obj = {name: 'tom',age: 25,wife: {name: 'marry',age: 22}} // 
    const state = reactive(obj) // state为proxy代理对象
    const update = () => {
      obj.name = 'jack' // state不会被更改,页面上的obj也不会更改(不是响应式)
      state.name += '--' // 页面和obj都会被更改
      state.age += 1
      state.wife.name += '++'
      state.wife.age += 2
    }


   

    // 返回的是一个对象
    return {
      // 属性
      count0,
      count,
      obj,
      state,
      // 方法
      updateCount,
      update,
    };

    // 比较Vue2与Vue3的响应式(重要)
    //   #vue2的响应式
    //   核心:
    //      对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)
    //      数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持
    //   问题
    //      对象直接新添加的属性或删除已有属性, 界面不会自动更新
    //      直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] ={}
    // Vue3的响应式
    //   核心:
    //     通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
    //     通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作
    //   文档:
    //   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    //   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
    new Proxy(obj, {
      // 拦截读取属性值
        get (target, prop) {
          return Reflect.get(target, prop)
        },
        // 拦截设置属性值或添加新属性
        set (target, prop, value) {
          return Reflect.set(target, prop, value)
        },
        // 拦截删除属性
        deleteProperty (target, prop) {
          return Reflect.deleteProperty(target, prop)
        }
    })

    // proxy.name = 'tom'   
    
    }
  });
</script>

<style scoped></style>
