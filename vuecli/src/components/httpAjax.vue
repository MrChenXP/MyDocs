<!--template标签 相当于body标签 用来解析html标签-->
<template>
  <div class="">
    <div>接口来自jsonplaceholder网站</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      class_id: this.$route.query.class_id,  // 获取地址'?'后面的东西
    }
  },
  methods:{
    // vue-resource 来请求,推荐用axios 
    getVueResource(){
      this.$http.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((data)=>{
              console.log(data)
        })
      // 也可直接请求本地文件,但要放在static下,axios也一样
      this.$http.get("../../static/posts.json")
        .then((data)=>{
              console.log(data)
        })
    },
    // axios 
    getAxios(){
      let _this = this;
      axios.get('/api/posts?userId=1',{ // 这个使用了代理 参考config/index.js
        params:{
          method: 'all'
        }}).then((res) => {
          console.log(res)
        }).catch((err) => console.log(err))
    }
  },
  created(){
    this.getVueResource();
    this.getAxios()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
