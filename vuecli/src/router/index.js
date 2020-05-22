// 单独将路放在一个文件,然后让main.js引入这个文件,不要在main.js里写所有的逻辑

import Vue from 'vue'
import Router from 'vue-router' // 引入vur-roter模板
import HelloWorld from '@/components/HelloWorld'  // 要先引入组件才能 配置路由
import tf from '@/components/test_footer'   // 此刻的a对应下面的component：
import teme from '@/components/teme'
import temeH from '@/components/temeH'
import temeStu from '@/components/temeStu'

Vue.use(Router); // 用use这个中间件使用这个路由

export default new Router({ // 这里配置路由
  routes: [
    {
      path: '/', // 路由地址
      name: 'HelloWorld', // 路由名
      component: HelloWorld // 组件文件名,上面引入的时候,自己命名的
    },
    {
      path: '/test_footer',
      name: 'test_footer',
      component: tf ,
    },
    {//所有班级路由
      path:'/teme',
      name:'teme',
      component:teme
    },
    {//班级首页路由
      path:'/temeH',
      name:'temeH',
      component:temeH
    },
    {//学生首页路由
      path:'/temeStu',
      name:'temeStu',
      component:temeStu
    }
  ],
  // mode:'history'  //去除路由 # 如果要打包请把这句去掉 不然会路径错误
//config/ index.js build{ assetsPublicPath: './'}  打包后index.html引用的路径
})


