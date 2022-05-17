<template>
  <div>count</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
  // 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用
  // setup是组合api的入口函数
  setup() {
    // 变量
    let count = 0;
    // 方法
    function updateCount() {
      alert(count);
    }

    // 返回的是一个对象
    return {
      // 属性
      count,
      // 方法
      updateCount,
    };
  },
});
</script>

<style></style>
