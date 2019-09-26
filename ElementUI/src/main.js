// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import ElementUI from 'element-ui';// 引用element-ui插件
import 'element-ui/lib/theme-chalk/index.css'; // 引用element-ui样式
import 'element-ui/lib/theme-chalk/display.css'; //引用隐藏类

Vue.use(ElementUI); // 安装element-ui
//Vue.use(ElementUI,{size:'small',zIndex:3000}) //设置默认大小和zIndex

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),//接给绑定节点渲染一个vue组件 同components: { App },
});
