<style scoped>

</style>

<template>
<div class="from">
  <!--
  <el-radio> 单选框 要使用Radio组件,要设v-model绑定变量,选中意味着变量的值为
    相应label属性的值,label可以是String、Number或Boolean.
  disabled  禁用状态，true为禁用。

  -->
  <el-radio v-model="radio" label="1">男</el-radio>
  <el-radio v-model="radio" label="2">女</el-radio>
  <el-radio disabled=true v-model="radio1" label="禁用">备选项</el-radio>
  <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
</div>
</template>

<script>
  export default {
    name: 'from',
    data() {
      return {
        radio: '1',
        radio1: '选中且禁用'
      }
    }
  }
</script>
