<!--template标签 相当于body标签 用来解析html标签 第一级子代只能出现一个div-->
<template>
  <div id="div1">
    <h2>test</h2>
    <router-link to="/">标签跳转HelloWorld</router-link>
    <h2>{{msg}}</h2>
    <div class="vux-srote">
      <button v-on:click="jian">-</button>
      <span>{{$store.state.count}}调用仓库的值</span>
      <button v-on:click="jia">+</button>
    </div>
    {{message}}
  </div>
</template>

<script>
  import Bus from '../assets/bus'
export default {
  name: 'test',
  data () {
    return {
      msg: this.$route.params.ii,
      message:  ''
    }
  },
  mounted() {
    let self = this
    // 监听当前实例上的自定义事件,事件可以由$emit触发,回调函数会接收所有传入事件触发函数的额外参数
    // msg是事件名
    Bus.$on('msg', (e) => {
      self.message = e
      console.log(`传来的数据是：${e}`)
    })
  },
  methods:{
    jia:function () {
      this.$store.commit( 'jia' );  //调用仓库的方法
    },
    jian:function () {
      this.$store.commit( 'jian' );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
