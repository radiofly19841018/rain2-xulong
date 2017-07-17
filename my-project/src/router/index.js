import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/map',
      name: 'map',
      component: require('../views/map')
    },
    {
      path: '/info',
      name: 'info',
      component: require('../views/info')
    },
    {
      path: '/exhibition/:id',
      name: 'exhibition',
      component: require('../views/exhibition')
    }
  ]
})
