<template>
  <div>{{ count }}</div>
  <button @click="updateCount">修改</button>

  <div>{{JSON.stringify(state)}}</div>
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
    const obj = {name: 'tom',age: 25,wife: {name: 'marry',age: 22},}
    const state = reactive(obj) // state为proxy代理对象
    const update = () => {
      obj.name = 'jack' // state不会被更改
      state.name += '--'
      state.age += 1
      state.wife.name += '++'
      state.wife.age += 2
    }


   

    // 返回的是一个对象
    return {
      // 属性
      count0,
      count,
      state,
      // 方法
      updateCount,
      update,
    };
  },
});
</script>

<style scoped></style>
