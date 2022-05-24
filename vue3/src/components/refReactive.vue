<template>
  <div>
    <h1>FefReactive</h1>
    <div>{{ count }}</div>
    <button @click="updateCount">修改</button>

    <div>{{ JSON.stringify(state) }}</div>
    <div>{{ JSON.stringify(obj) }}</div>
    <button @click="update">修改update</button>
    <div>{{ JSON.stringify(m1) }}</div>
    <div>{{ JSON.stringify(m2) }}</div>
    <div>{{ JSON.stringify(m3) }}</div>
    <button @click="updateM3">修改updateM3</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "fefReactive",
  props: {},

  setup() {
    /**======== ref 创建一个包含响应式数据的引用(reference)对象 ========*/
    let count0 = 0; // 此时的数据并不是响应式的数据(数据变化,页面跟着渲染变化)
    let count = ref(0); // 一般用来定义一个基本类型的响应式数据
    function updateCount() {
      // count++ 报错 因为count是一个ref对象,不能进行计算
      count.value++;
    }

    /**======== reactive 定义多个数据的响应式 ========*/
    const obj = { name: "tom", wife: { age: 22 } }; //接收一个普通对象然后返回该普通对象的响应式代理器对象 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    const state = reactive(obj); // 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式 state为proxy代理对象
    const update = () => {
      obj.name = "jack"; // obj不会被更改,页面上的obj也不会更改(不是响应式)
      state.name += "--"; // 页面和obj都会被更改
      state.wife.age += 2;
    };

    // reactive与ref-细节
    //   是Vue3的 composition API中2个最重要的响应式API
    //   ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
    //   如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
    //   ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
    //   reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
    //   ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)
    const m1 = ref('abc')
    const m2 = reactive({x: 1, y: {z: 'abc'}})

    // 使用ref处理对象  ==> 对象会被自动reactive为proxy对象
    const m3 = ref({a1: 2, a2: {a3: 'abc'}})
    console.log(m1, m2, m3)
    console.log(m3.value.a2) // m3是ref对象, m3.value是一个proxy对象

    function updateM3() {
      m1.value += '--'
      m2.x += 1
      m2.y.z += '++'

      m3.value = {a1: 3, a2: {a3: 'abc---'}}
      m3.value.a2.a3 += '==' // reactive对对象进行了深度数据劫持
      console.log(m3.value.a2)
    }

    return {
      count0,
      count,
      obj,
      state,
      m1,
      m2,
      m3,
      updateCount,
      update,
      updateM3
    };
  },
});
</script>

<style scoped></style>
