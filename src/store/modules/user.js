import { login, currentUser, logout } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: null,
    userOrg: null,
    roles: null,
    permissions: null,
    watermark: null,
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_USER_ORG: (state, userOrg) => {
      state.userOrg = userOrg
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_WATERMARK: (state, watermark) => {
      state.watermark = watermark
    }
  },

  actions: {
    // 用户登录
    LoginByUser ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const data = response.data
          if (response.data.errorcode === 0) {
            commit('SET_TOKEN', data.token)
            setToken(response.data.token)
            resolve()
          } else {
            reject(new Error(response.data.errormsg))
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        currentUser(state.token).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject(new Error('error'))
          }
          const data = response.data
          if (data.errorcode === 0) {
            commit('SET_USER', data.user)
            commit('SET_ROLES', data.roles)
            commit('SET_USER_ORG', data.user.organization)
            commit('SET_PERMISSIONS', data.permissions)
            commit('SET_WATERMARK', data.watermark)
            resolve(response)
          } else {
            reject(new Error(data.errormsg))
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
    // 动态修改权限
  }
}

export default user
