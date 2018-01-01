import Vue from 'vue'
import Router from 'vue-router'
import demo from 'components/v-demo/v-demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo2'
    },
    {
      path: '/demo1',
      component: demo
    },
    {
      path: '/demo2',
      component: demo
    },
    {
      path: '/demo3',
      component: demo
    }
  ]
})
