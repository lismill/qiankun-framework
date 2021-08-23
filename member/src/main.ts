import './public-path'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const id = 'member'
let instance:any = null

/**
 * 渲染函数
 */
function render (props: any) {
  // 实例挂载
  const { container } = props

  // 存储公共状态
  if ((window as any).__POWERED_BY_QIANKUN__) {
    store.commit('RESET_GLOBAL_STATE', props.store.state)
  }

  // 创建实例
  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector(`#${id}`) : `#${id}`)
}

/**
 * 渲染子应用
 */
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({})
}

/**
 * qiankun生命周期
 */
export async function bootstrap ():Promise<void> {
  console.log(`${id}:::bootstrap`)
}
export async function mount (props: any):Promise<void> {
  render(props)
}
export async function unmount ():Promise<void> {
  console.log(`${id}:::unmount`)
  instance.$destroy()
}
