import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken, removeLocalStorage } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
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
      next()
    }
  } else {
    // has no token
    removeLocalStorage() // 没有登录时清除本地LocalStorage数据
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
