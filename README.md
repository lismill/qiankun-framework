# Qiankun

## 主应用
实现登录/菜单/导航/公共组件/公共方法等功能

## 子应用
作为独立的一个项目，脱离主项目仍然可以独立运行

## 配置方式
### 主应用安装qiankun
```shell
cnpm install qiankun -S
```
```javascript
# main.ts
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
```



### 子应用暴露生命周期钩子

`./public-path`

```javascript
/* eslint-disable camelcase */
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
```


`main.ts`

```javascript
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

```


`vue.config.js`

```
const port = 10001
const name = 'member'

module.exports = {
  publicPath: '/',
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
```



`router.ts`

```javascript
const router = new VueRouter({
  mode: 'history',
  base: '/member/',
  routes
})
```



## 公共组件

### CDN 方式
### props 方式
#### 主应用

`./components/index.ts`

```typescript
import LeeLean from './lee-lean.vue'

const components = [
  { name: 'lee-lean', component: LeeLean }
]

const install = function (Vue: any) {
  components.forEach((item: any) => Vue.component(item.name, item.component))
}

export default {
  install
}
```



`main.ts`

```
import components from './components'

registerMicroApps([
  {
    name: 'member',
    entry: '//localhost:10001',
    container: '#app-viewport',
    activeRule: '/member',
    props: {
      store,
      components
    }
  }
])
```



#### 子应用

```
function render (props: any) {
  // 安装公共组件
  Vue.use(props.components)
```
