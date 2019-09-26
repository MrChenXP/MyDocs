<!--template标签 相当于body标签 用来解析html标签 第一级子代只能出现一个div-->
<template>
  <div>
    <div class="container table-responsive">
      <div class=" text-left pull-left	">
        <router-link :to="{path:'teme'}" class="text-muted shou">返回班级首页</router-link>
      </div>
      <h1>{{class_name}} 班级首页</h1>
      <table class="table table-striped table-bordered table-hover table-condensed">
        <thead>
        <tr>
          <th>名次</th>
          <th>学号</th>
          <th>姓名</th>
          <th>纪律考核分</th>
          <th>技术考核分</th>
          <th>职业能力考核分</th>
          <th>综合分</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for = '(s,i) in stu '>
          <td>{{i+1}}</td>
          <td>{{s.stu_id}}</td>
          <td  v-on:click="tiao(i)"  v-bind:class="{shou:true}">{{s.stu_name}}</td>
          <td>{{s.score_jilv}}</td>
          <td>{{s.score_jishu}}</td>
          <td>{{s.score_zhiye}}</td>
          <td>{{s.score_avg}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
  name: 'test',
  data () {
    return {
      class_id: this.$route.query.class_id,  //获取地址栏？后面的东西(班级id)
      class_name:this.$route.query.class_name,//获取班级名字
      stu: [],
      stu_id: null
    }
  },
  methods:{
    tiao:function (i) {
      this.stu_id =''+this.stu[i].stu_id;
      this.$router.push({path:'/temeStu'+'?stu_id='+ this.stu_id + '&class_id='+this.class_id+'&class_name='+this.class_name});
    }
  },
  created(){
    let _this = this;
    axios.get('http://182.61.33.130/YunheStuScoresInterface/studentServlet',{
      params:{
        method: 'home',
        class_id:_this.class_id,
        class_name:_this.bt
      }
    }).then((res) => {
      _this.stu = res.data.stuArray;
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
