import Vue from 'vue'
import Vuex from 'vuex'
import configs from './modules/config'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    configs,
    user,
    permission
  },
  getters,
  plugins: [createPersistedState()]// 会自动保存创建的状态。刷新还在
})

export default store
