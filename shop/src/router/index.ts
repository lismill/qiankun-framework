import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/shop/',
  routes
})

export default router
