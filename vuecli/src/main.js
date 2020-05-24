// index.html->main.js->App.vue->其他组件
// 将App.vue引入,然后components属性注册这个组件,然后把components里的单页面覆盖App.vue里的router-view

import Vue from 'vue' //引入vue
import App from './App' //引入App.vue组件(浏览器不支持vue后缀，webpack会使用vue-louder把他变成对象)
import router from './router' //默认index.js
import VueResource from 'vue-resource' // 引入vue-resource

import Vuex from 'vuex'; //引入vuex插件
import store from './router/store'
Vue.use(Vuex);  //安装 Vuex 这样就能在任意组件使用了,this.xxx就能用了
Vue.use(VueResource);  //安装 vue-resource
Vue.config.productionTip = false;

// 注册为全局组件,这样每个页面都能直接通过<test></test>使用test组件,包扩App.vue
// import test_footer form './test_footer' // 引入test组件
// Vue.component("test-footer",test_footer) // (别人调用它时用的名字, 引入的组件名)
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

// 自定义指令(全局) 局部注册可查看vue自定义指令,一样的
Vue.directive("cxp",{
  bind(el,binding,vndoe){
    el.style = binding.value || "color:red" ;
    console.log(binding.xsf)
  }
})

/* eslint-disable no-new */
// 创建vue实例
new Vue({ 
  el: '#app', // #app代表的是index.html中的#app 提供一个页面上已存在的DOM元素作为Vue实例挂载目标
  router, // 使用router 路由
  store,//挂载store
  components: { App },  // 创建一个模板 之前已经创建好了App对象
  template: '<App/>',   // 把模板<App />覆盖到#app上 可查看vue-组件文档
  //render 是vue模板最底层的，template模板也是调用render来实现的
  /*
  render:function (createElement) {
    createElement(App);//把App变成一个dom节点 并把它放到#app上去
  }
  render:h=>h(App)//或者这样写
  */
});

