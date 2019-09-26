import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  //要先引入组件才能 配置路由
import a from '@/components/test'   //此刻的a对应下面的component：
import teme from '@/components/teme'
import temeH from '@/components/temeH'
import temeStu from '@/components/temeStu'

Vue.use(Router);

export default new Router({ //这里配置路由
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test', //路由
      name: 'test', //路由名
      component: a ,//组件文件名
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


