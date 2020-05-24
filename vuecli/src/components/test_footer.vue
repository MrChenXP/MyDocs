<!--template标签 相当于body标签 用来解析html标签 第一级子代只能出现一个div-->
<template>
  <div id="test_footer">
    <h2>这里是testFooter组件</h2>
    <h2>{{msg}}</h2>
    <div class="vux-srote">
      <button v-on:click="jian">-</button>
      <span>{{$store.state.count}}调用仓库的值</span>
      <button v-on:click="jia">+</button>
    </div>
    <div>这是父传给子组件的值{{val}}</div>
    <button v-on:click="changeVal()">点击实现子向父传值,通过事件方法</button>
    

  </div>
</template>

<script>
  import Bus from '../assets/bus'
export default {
  name: 'test_footer',
  // props:["val","title"], 简易写法
  props:{
    val:{
      type: Number, // Promise:全部
      required: true, // 必填
      default: '组件属性', 
    },
    title:[Function, Symbol,Date,Promise], // 多个可能的类型
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () { // default:默认值
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      msg: this.$route.params.ii,
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
    },
    // 子向父传值 事件传值 参考vue组件文档
    changeVal(){
      this.$emit("testChange","第二个参数是子暴露给父的值");
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#test_footer{
  background: #c0ebd7;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
}
</style>
