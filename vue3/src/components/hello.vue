<template>
  <div>{{ count }}</div>
  <button @click="updateCount">修改</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {},
  // 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
  // setup是组合api的入口函数
  setup() {
    // 变量
    let count0 = 0; // 此时的数据并不是响应式的数据(数据变化,页面跟着渲染变化)
    let count = ref(0); // ref 创建一个包含响应式数据的引用(reference)对象 一般用来定义一个基本类型的响应式数据
    console.log(count);
    // 方法
    function updateCount() {
      // count++ 报错 因为count是一个ref对象,不能进行计算
      count.value++;
    }

    // 返回的是一个对象
    return {
      // 属性
      count0,
      count,
      // 方法
      updateCount,
    };
  },
});
</script>

<style scoped></style>
