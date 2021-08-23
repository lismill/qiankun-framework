import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

/**
 * qiankun - 注册子应用
 */
registerMicroApps([
  {
    name: 'member',
    entry: '//localhost:10001',
    container: '#app-viewport',
    activeRule: '/member',
    props: {
      store
    }
  }
])
// qiankun - 启动
start()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#framework')
