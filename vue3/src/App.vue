<template>
  <div>vue2中的html模板中必须有一对跟标签,vue3组件的html模板可以没有跟标签</div>
  <!-- 使用子级 -->
  <children />
</template>

<script lang="ts">
// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent } from "vue";
// 引入一个子级组件
import children from "./components/refReactive.vue";

// 暴露出一个定义好的组件
export default defineComponent({
  name: "App", // 当前组件的名字是App
  components: {
    // 注册组件
    children, // 注册一个子级组件
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
