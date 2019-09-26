<template>
  <div class="container">
    <div class="logo">
      <h2  v-on:click="tiao" v-bind:class="{shou:true}">{{class_name}}</h2>
      <div class="stuIfo">
        <div class="row">
          <div class="col-md-4">
            <div class="stu">
              <img v-bind:src="'http://182.61.33.130/YunheStuScoresManager/upload/'+stu.stu_img" width="150px" height="200px">
              <ul class="stu-info">
                <li>学号：{{ stu.stu_no }}</li>
                <li>姓名：{{ stu.stu_name }}</li>
                <li>性别：{{ stu.stu_sex }}</li>
                <li>专业：{{ stu.stu_profession }}</li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="info">
              <h3>历史考核分情况</h3>
              <ul class="cell">
                <li v-for="x in msx">{{ x.time }}: “{{ x.score_contents }}” {{  x.score_value }}分</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <table class="table table-bordered" style="margin-top:20px">
        <thead>
        <tr>
          <th>日期</th>
          <th>姓名</th>
          <th>上班打卡时间</th>
          <th>下班打卡时间</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="i in msi">
          <td>{{ i.date }}</td>
          <td>{{ i.stu_name }}</td>
          <td>{{ i.start_time }}</td>
          <td>{{ i.end_time }}</td>
          <td>{{ status(i.status) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
<!--翻页-->
      <nav aria-label="Page navigation ">
        <ul class="pagination navbar-btn" style="justify-content:center;">
          <li>
            <button class="btn active" v-on:click="tcp('jian')">上一页</button>
          </li>
          <li v-for="i in Math.ceil(total/10)">
            <button type="button" class="btn btn-default" v-on:click="tcp(i)" >{{i}}</button>
          </li>
          <li>
            <button class="btn active" v-on:click="tcp('jia')">下一页</button>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
  //暂时连接本地服务器 在线服务器182.61.33.130
  import axios from 'axios';
  export default {
  data () {
    return {
      class_name:this.$route.query.class_name,
      class_id:this.$route.query.class_id,
      stu:[],
      stu_id: this.$route.query.stu_id,
      msx:[],
      msi:[],
      currentPage:1,
      total:0,//存储 打卡记 录数组长度
    }
  },
  methods:{
    //跳转翻页
    tcp:function (t) {
      if(t === 'jia'){
        if(this.msi.length === 10){
          this.currentPage +=1;
          this.getmis(this);
          console.log(this.currentPage)
        }
      }else if(t === 'jian') {
        if(this.currentPage > 1){
          this.currentPage -=1;
          this.getmis(this);
          console.log(this.currentPage)
        }
      }else{
        this.currentPage = t;
        this.getmis(this);
      }
    },
    //查询某个学生的打卡记录列表
    getmis:function (_this) {
      axios.get('http://182.61.33.130/YunheStuScoresInterface/recordServlet',{
        params:{
          method:'selectByStuId',
          stu_id:_this.stu_id,
          currentPage:_this.currentPage,
          pageSize:10
        }
      }).then((res) =>{
        _this.msi = res.data.stuArray;
        _this.total = res.data.totalCount
      }).catch((err) => console.log(err));
    },
    //判断打卡状态
    status:function (stas) {
      if(stas == 0){
        return "待处理";
      }else if(stas == 1){
        return "正常";
      }else{
        return "异常";
      }
    },
    //返回班级首页
    tiao:function () {
      this.id =''+this.class_id;
      this.name = ''+this.class_name;
      this.$router.push({path:'/temeH'+'?class_id='+this.id + '&class_name='+this.name});
    }
  },
  created(){
    let _this = this;
    //学生信息详情
    axios.get('http://182.61.33.130/YunheStuScoresInterface/studentServlet',{
      params:{
        method:'info',
        stu_id:_this.stu_id
      }
    }).then((res) => {
      _this.stu = res.data.stuInfo;
    }).catch((err) => console.log(err));
    //积分考核情况列表 查询某个学生的积分情况列表
    axios.get('http://182.61.33.130/YunheStuScoresInterface/scoreServlet',{
      params:{
        method:'selectByStuId',
        stu_id:_this.stu_id
      }
    }).then((res) =>{
      _this.msx = res.data.stuArray;
    }).catch((err) => console.log(err));
    //查询某个学生的打卡记录列表
    _this.getmis(_this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-weight: normal;
  }
  .color{
    background-color: skyblue;
  }
  a {
    color: #42b983;
  }
  .stu{
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    text-align: left;
    background-color: rgba(139, 139, 139, 0.53);
  }
  .info{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;
    background-color: lightpink;
  }
  .stu-info{
    width: 70%;
    margin-top: 20px;
  }
  .cell{
    width: 60%
  }
  .box{
    width: 100%;
    margin: 0 auto;
  }
</style>
