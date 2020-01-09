import Vue from 'vue'
import Vuex from 'vuex'

import good from './modules/good'
import user from './modules/user'
Vue.use(Vuex)   // 注册

// 仓库、数据中心、总部
const store = new Vuex.Store({
  modules: {
    good,
    user
  }
})

export default store
