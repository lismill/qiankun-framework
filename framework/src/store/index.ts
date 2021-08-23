import Vue from 'vue'
import Vuex from 'vuex'
import { globalState } from '../global-state/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: globalState,
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
