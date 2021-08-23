import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 框架配置
    framework: {
      vue: '2.x.x',
      element: '2.x.x',
      version: '1.x.x',
      baseUrl: './'
    },
    // 基础配置
    basic: {
      token: '',
      user: {}
    }
  },
  mutations: {
    RESET_GLOBAL_STATE (state: any, payload: any):void {
      state[payload.key] = { ...state[payload.key], ...payload.value }
    }
  },
  actions: {
  },
  modules: {
  }
})
