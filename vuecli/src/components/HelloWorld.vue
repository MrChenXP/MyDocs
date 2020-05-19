<template>
  <div class="hello">
    <h2>helloworld</h2>
    <router-link to="/test">标签跳转test</router-link>
    <button v-on:click="link">方法跳转test</button>
    <div class="vux-srote">
      <button v-on:click="jian">-</button>
      <span>{{$store.state.count}}调用仓库的值</span>
      <button v-on:click="jia">+</button>
    </div>

    <div id="emit">
      <button @click="bus">触发bus</button>
    </div>


    <test></test>

  </div>
</template>

<script>
  import Bus from '../assets/bus'
  // 局部注册,只能在这个页面使用
  import test from './test.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: this.$store.state.count,
        A: this.$route.params.ii
      }
    },
    // "test":test可以简写为test es6写法
    components: {test},
    methods: {
      link: function () {
        this.$router.push({path: '/test'});
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
