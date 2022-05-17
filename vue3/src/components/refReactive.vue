<template>
  <div>{{ count }}</div>
  <button @click="updateCount">修改</button>

  <div>{{ JSON.stringify(state) }}</div>
  <div>{{ JSON.stringify(obj) }}</div>
  <button @click="update">修改</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "FefReactive",
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

    

    return {
      count0,
      count,
      obj,
      state,
      updateCount,
      update,
    };
  },
});
</script>

<style scoped></style>
