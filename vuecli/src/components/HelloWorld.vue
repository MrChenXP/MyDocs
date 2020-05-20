<template>
  <div class="hello">
    <router-link to="/test_footer">标签跳转test_footer</router-link>
    <button v-on:click="link">方法跳转test_footer</button>

    <div class="vux-srote">
      <button v-on:click="jian">-</button>
      <span>{{$store.state.count}}调用仓库的值</span>
      <button v-on:click="jia">+</button>
    </div>

    <div id="emit">
      <button @click="bus">触发bus</button>
    </div>

    <!--components里用的时驼峰注册,vue-cli可以识别'-'这种命名方式 
        val是子组件的属性,父向子传值。如果传的是引用(Object,Function等),
          其中一个子组件更改了val值,另一个也会跟着更改val值 -->
    <test-footer v-bind:val="msg"></test-footer>

  </div>
</template>

<script>
  import Bus from '../assets/bus'
  // 局部注册,只能在这个页面使用 
  import testFooter from './test_footer.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: this.$store.state.count,
        A: this.$route.params.ii
      }
    },
    // "test_footer":test_footer可以简写为test es6写法
    components: {testFooter},
    methods: {
      link: function () {
        this.$router.push({path: '/test_footer'});
      },
      jia: function () {
        this.$store.commit('jia');
      },
      jian: function () {
        this.$store.commit('jian');
      },
      // bus事件
      bus() {
        // 触发bus事件 第2个参数是传给msg事件中回调函数的值 注意生命周期,
        Bus.$emit('msg', '22222','333')
        // 移除自定义事件监听器 注意生命周期,
        // 如果没有提供参数，则移除所有的事件监听器；
        // 如果只提供了事件，则移除该事件所有的监听器；
        // 如果同时提供了事件与回调，则只移除这个回调的监听器。
        Bus.$off('msg')
      }
    }
  }
</script>

<!--默认按照文档流方式,后引入的css层级高,会出现子覆盖父的样式
    但增加"scoped"代表只影响这个组件,不会影响他组件,包括子组件(通过标签属性data-v-xxxx唯一标识富来实现) -->
<style scoped>
  .hello{
    padding: 10px 0;
    background: #f3f9f1;
    height: 100%;
  }
</style>
