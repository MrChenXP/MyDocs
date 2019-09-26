
<template>
<div class="basic">
  <!--
  Container 布局容器 采用flex布局
    <el-container>外层容器 包含<el-header><el-footer>时,
      子元素会垂直上下排列,否则会水平左右排列。<el-container>的子元素只能是
      后四者，后四者的父元素也只能是 <el-container>。
      子元素的排列方向 direction="vertical|horizontal "水平|垂直
    <el-header>：顶栏容器。 height顶栏高度 默认60px
    <el-aside>：侧边栏容器。 width侧边栏宽度 默认300px
    <el-main>：主要区域容器。
    <el-footer>：底栏容器。 height底栏高度 默认60px
  Layout布局 24分栏  row和col组合使用
    行属性 :gutter 指定每一栏之间的间隔 使用padding来实现
          type='flex' 启用flex布局
          justify flex 布局下的水平排列方式
              center居中对齐 start左对齐 end右对齐
              space-between空格间距在中间对齐 space-around左右各占半格空格对齐
          align flex 布局下的垂直排列方式
              top上对齐 middle中对齐 botton下对齐
          :xs(超小<768) :sm(小>=768) :md(中等>=992) :lg(大>=1200) :xl(超大) 响应式布局
          隐藏类 .hidden-xs-only 在xx尺寸时隐藏
                .hidden-xs-and-down 在xx及以下尺寸时隐藏
                .hidden-xs-and-up 在xx及以上尺寸时隐藏
    列属性 :span控制格数
          :offset 分栏偏移 栅格左侧的间隔格数 使用margin
          :push 栅格向右移动格数
          :pull 栅格向左移动格数
  -->
  <el-container direction="vertical">
    <el-row>
      <el-col :span="24"><div class="bred">24格</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="5" :offset="5"><div class="bred">5格</div></el-col>
      <el-col :span="8" :push="6"><div class="bblue">8格</div></el-col>
      <el-col :span="6" :pull="8"><div class="bgreen">6格</div></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="5"><div class="bred">5格</div></el-col>
      <el-col :span="8"><div class="bblue">8格</div></el-col>
      <el-col :span="15"><div class="bgreen">15格</div></el-col>
    </el-row>
    <el-row>
      <el-col :xs="6" :md="10"><div class="bblue">超小6 中等10</div></el-col>
      <el-col :xs="6" :md="4"><div class="bgreen">超小6 中等4</div></el-col>
      <el-col :xs="6" :md="10" class="hidden-sm-only"><div class="bred">超小6 中等10</div></el-col>
    </el-row>
  </el-container>
  <!--
  color色彩规范   主色调 #409EFF 蓝色     成功 #67C23A 绿色
    警告 #E6A23C 黄色   危险#F56C6C 红色    信息 #909399 灰色
    主要文字 #303133  常规文字 #606266  次要文字 #909399  占位文字 #C0C4CC
    一级边框 #DCDFE6  二级边框 #E4E7ED  三级边框 #EBEEF5  四级边框 #F2F6FC
  Icon 图标 设置类名来使用 http://element-cn.eleme.io/#/zh-CN/component/icon
  按钮 type(有底色)、plain(淡底色)、round(圆角)、circle(圆)
      primary(主要蓝色) success(成功绿色) info(信息灰色) warning(警告橙色) danger(危险红色)
      disabled 定义按钮是否可用(颜色变浅)
      type='text' 文字按钮 (无边框)
      <el-button-group> 按钮组(连在一起，没有缝隙,边框也是也没了)
      :loading="true" 点击按钮后进行数据加载操作，在按钮上显示加载状态
      size 不同尺寸 medium(中等) small(小型) mini(超小)
      nativeType|native-type 原生type属性 button / submit / reset
  -->
      <i class="el-icon-edit"></i>
      <p class="el-icon-share"></p>
      <span class="el-icon-delete"></span>
      <el-button-group>
        <el-button icon="el-icon-tickets">默认</el-button>
        <el-button type="text">文字按钮</el-button>
        <el-button type="round" :loading="true">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-button-group>
      <el-button type="primary" size="mini">主要</el-button>
      <el-button type="success">成功</el-button>
      <el-button type="info" plain>信息</el-button>
      <el-button type="warning" round>警告</el-button>
      <el-button type="danger" circle disabled='disabled'>危险</el-button>
      <el-button nativeType="reset">重置</el-button>
</div>
</template>

<script>
import ElCol from "element-ui/packages/col/src/col";
import ElContainer from "../../node_modules/element-ui/packages/container/src/main.vue";
import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";
import ElAside from "../../node_modules/element-ui/packages/aside/src/main.vue";
import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";
import ElButtonGroup from "../../node_modules/element-ui/packages/button/src/button-group.vue";
import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

export default {
  components: {
    ElButton,
    ElButtonGroup,
    ElFooter,
    ElAside,
    ElHeader,
    ElContainer,
    ElCol},
  name: 'basic',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .bred{
    background: #F56C6C;
    font-family: "Hiragino Sans GB";
  }
  .bblue{
    background: #67C23A;
  }
  .bgreen{
    background: #E6A23C;
  }
</style>
