// 单独将路由放在一个文件,然后让main.js引入这个文件,不要在main.js里写所有的逻辑

import Vue from 'vue'
import Router from 'vue-router' // 引入vur-roter模板
import HelloWorld from '@/components/HelloWorld'  // 要先引入组件才能 配置路由
import tf from '@/components/test_footer'   // 此刻的a对应下面的component：
import httpAjax from '@/components/httpAjax'

Vue.use(Router); // 用use这个中间件使用这个路由

export default new Router({ // 这里配置路由
  routes: [
    {
      path: '/', // 路由地址 浏览器地址栏那里的
      name: 'HelloWorld', // 路由名
      component: HelloWorld // 组件文件名,上面import的,路由地址要执行的组件
    },
    {
      path: '/test_footer',
      name: 'test_footer',
      component: tf ,
    },
    {
      path: '/httpAjax',
      name: 'httpAjax',
      component: httpAjax ,
    },
    // 动态路由 :n httpAjax/aa httpAjax/bb 都可以映射到相同路由 通过this.$route.params.n来获取
    {
      path: '/httpAjax',
      name: 'httpAjax',
      component: httpAjax ,
    },
  ],
  // mode:'history'  //去除路由 # 如果要打包请把这句去掉 不然会路径错误
//config/ index.js build{ assetsPublicPath: './'}  打包后index.html引用的路径
})


