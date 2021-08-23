import { initGlobalState } from 'qiankun'
import store from '../store'

export const globalState = {
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
}
const actions = initGlobalState(globalState)
actions.onGlobalStateChange((current): void => store.commit('RESET_GLOBAL_STATE', current))

export default actions
