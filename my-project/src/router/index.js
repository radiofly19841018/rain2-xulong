import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/map',
      name: 'map',
      component: require('../components/map')
    },
    {
      path: '/info',
      name: 'info',
      component: require('../components/info')
    }
  ]
})
