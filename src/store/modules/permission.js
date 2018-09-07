import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过用户权限匹配当前前用户路由
 * @param userPermission
 * @param route
 */
function hasPermission (userPermission, route) {
  if (route) {
    return userPermission.some(permissionItem => permissionItem.url === route.name)
  } else {
    return false
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 * @param asyncRouterMap
 */
function filterAsyncRouter (asyncRouterMap, userPermission) {
  const accessedRouters = asyncRouterMap.routers.filter(route => {
    if (hasPermission(userPermission, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, userPermission)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    modalType: '', // 当前主模块
    modalRouters: []// 当前主模块可访问路由
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_MODAL_TYPE: (state, type) => {
      state.modalType = type
    },
    SET_MODAL_ROUTERS: (state, routers) => {
      state.modalRouters = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { userPermission } = data
        let accessedRouters
        accessedRouters = filterAsyncRouter(asyncRouterMap, userPermission)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    SetModalType ({ commit }, data) {
      if (data) {
        commit('SET_MODAL_TYPE', data)
      }
    },
    SetModalRouters ({ commit }, data) {
      if (data) {
        commit('SET_MODAL_ROUTERS', data)
      }
    }
  }
}

export default permission
