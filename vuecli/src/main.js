// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue' //引入vue
import App from './App' //引入App.vue组件(浏览器不支持vue后缀，webpack会使用vue-louder把他变成对象)
import router from './router' //默认index.js

 // import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

import Vuex from 'vuex'; //引入vuex插件
import store from './router/store'
Vue.use(Vuex);  //安装 Vuex

Vue.config.productionTip = false;

/* eslint-disable no-new */
//创建vue实例
new Vue({ //
  el: '#app', //#app代表的是index.html中的app 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  router,
  store,//挂载store
  components: { App },  //创建一个模板 之前已经创建好了App对象
  template: '<App/>',   //把模板渲染到#aApp上
  //render 是vue模板最底层的，template模板也是调用render来实现的
  /*
  render:function (createElement) {
    createElement(App);//把App变成一个dom节点 并把它放到#app上去
  }
  render:h=>h(App)//或者这样写
  */
});
