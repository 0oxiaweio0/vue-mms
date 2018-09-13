import Vue from 'vue'
import Router from 'vue-router'
import maternityClinicRouterMap from './modules/maternityClinic'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true, name: 'app.login' },
  { path: '/dashboard', component: () => import('@/views/dashboard/index'), hidden: true, name: 'app.dashboard' },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [].concat(maternityClinicRouterMap)
