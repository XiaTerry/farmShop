import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/cart/Cart.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import( './views/category/Category.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import( './views/user/User.vue')
    },
  ]
})
