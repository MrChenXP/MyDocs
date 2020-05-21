<template>
  <div id="appp">
    <div class="appp_header">这是App.vue里的内容</div>
    <!--使用这个标签接受其他组件-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, h1, h2{
  padding: 0;
  margin: 0;
}
a {
  color: #3b2e7e;
}
#appp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.shou{
  cursor: pointer;
}
.appp_header{
  padding: 10px 0;
  background: #c0ebd7;
}
</style>
