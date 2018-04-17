import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['../views/index'], resolve)
    },
    {
      path: '/map',
      name: 'map',
      component: resolve => require(['../views/map'], resolve)
    },
    {
      path: '/info',
      name: 'info',
      component: resolve => require(['../views/info'], resolve)
    },
    {
      path: '/menu/',
      name: 'menu',
      component: resolve => require(['../views/menu'], resolve)
    },
    {
      path: '/exhibition/:id',
      name: 'exhibition',
      component: resolve => require(['../views/exhibition'], resolve)
    }
  ]
})
