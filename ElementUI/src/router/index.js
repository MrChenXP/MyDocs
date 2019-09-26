import Vue from 'vue'
import Router from 'vue-router'
import basic from '@/components/basic'
import from from '@/components/from'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basic',
      component: basic
    },
    {
      path: '/from',
      name: 'basic',
      component: from
    }
  ]
})
