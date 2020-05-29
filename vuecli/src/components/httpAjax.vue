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
      // 也可直接请求本地文件,但要放在static下,axios也一样,正常情况下放接口就行
      this.$http.get("../../static/posts.json")
        .then((data)=>{
          console.log("vue-resource")
          console.log(data)
        })
    },
    // axios /api/posts?userId=1
    getAxios(){
      // 这个使用了代理 参考config/index.js ,{params:{method: ''}}
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      // axios.post("接口",{key:value}).then(()=>{}))
    },
    // fetch es6的一种请求方法
    getFetch(){
      // get
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then( res =>{ return res.json() })
        .then(todos =>{
          console.log('fetch')
          console.log(todos)
        });
      // post
      // fetch("接口",{method:"POST",body:xxxx,headers:{"Content-type":"application/json"}})
    }
  },
  created(){
    this.getVueResource();
    this.getAxios()
    this.getFetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
