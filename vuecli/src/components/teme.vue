<!--template标签 相当于body标签 用来解析html标签-->
<template>
  <div class="container table-responsive">
    <h1>所有班级</h1>
    <table class="table table-striped table-bordered table-hover table-condensed">
      <thead>
        <tr>
          <th>排序</th>
          <th>班级</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for = '(s,i) in stu '>
        <td><router-link :to="{path:'temeH',query:{class_id:s.class_id}}">{{i+1}}</router-link></td>
        <td v-on:click="tiao(i)" v-bind:class="{shou:true}" >{{s.class_name}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  data () {
    return {
      stu:[],
      id: null,
      name: null,
    }
  },
  methods:{
    tiao:function (i) {
      this.id =''+this.stu[i].class_id;
      this.name = ''+this.stu[i].class_name;
      this.$router.push({path:'/temeH'+'?class_id='+this.id + '&class_name='+this.name});
    }
  },
  created(){
    let _this = this;
    axios.get('http://182.61.33.130/YunheStuScoresInterface/classServlet',{
      params:{
        method: 'all'
      }
    }).then((res) => {
      _this.stu = res.data.classList;
    })
      .catch((err) => console.log(err))
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
