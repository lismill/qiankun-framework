export default {
  state: {
    // 框架配置
    framework: {},
    // 基础配置
    basic: {}
  },
  mutations: {
    RESET_GLOBAL_STATE (state: any, payload: any):void {
      const current = Object.entries(payload)
      current.forEach(([key, v]: any) => (state[key] = v))
    }
  },
  actions: {
  },
  modules: {
  }
}
