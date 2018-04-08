import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/index')
    },
    {
      path: '/map',
      name: 'map',
      component: require('../views/map')
    },
    {
      path: '/menu/',
      name: 'menu',
      component: require('../views/menu')
    },
    {
      path: '/exhibition/:id',
      name: 'exhibition',
      component: require('../views/exhibition')
    }
  ]
})
