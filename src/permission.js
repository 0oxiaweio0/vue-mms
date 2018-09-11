import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}
// 更具当前主模块类型对所有的路由进行过滤
function getGrouproutersByType (routers, type) {
  const modalRouters = routers.filter(router => {
    if (type) {
      if (router.meta) {
        if (router.meta.group && router.meta.group === type) {
          if (router.children && router.children.length > 0) {
            router.children = getGrouproutersByType(router.children, type)
          }
          return true
        }
        return false
      }
      return false
    }
    return false
  })
  return modalRouters
}

const whiteList = ['/login', '/register']// no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) { // determine if there has token
    // has token
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (to.meta.group) { // 跳转模块和当前模块判断,并设置当前模路由
        if (to.meta.group !== store.getters.modalType) {
          store.dispatch('SetModalType', to.meta.group)
          const modalRuters = getGrouproutersByType(store.getters.addRouters, to.meta.group)
          store.dispatch('SetModalRouters', modalRuters)
        }
      }
      if (!store.getters.roles || store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({path: '/401', replace: true, query: { noGoBack: true }})
        }
        // 可删 ↑
      }
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
