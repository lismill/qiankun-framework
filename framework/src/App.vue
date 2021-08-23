<template>
  <div id="framework-viewport">
    <aside>
      <section
        v-for="router in [
          { to: '/', name: '框架服务 - 首页' },
          { to: '/member', name: '会员服务 - 首页' },
          { to: '/shop', name: '商品服务 - 首页' }
        ]"
        :key="router.to">
        <router-link :to="router.to">
          {{router.name}}
        </router-link>
      </section>
    </aside>

    <main>
      <router-view/>
      <div id="app-viewport"></div>
    </main>
  </div>
</template>
<style lang="less" scoped>
#framework-viewport {
  display: flex;
  aside {
    padding-top: 20px;
    width: 200px;
    height: calc(100vh - 20px);
    border-right: 1px solid #dedfe1;
    background-color: #f5f5f5;
    a {
      padding-left: 20px;
      display: block;
      line-height: 2.2;
      font-size: 14px;
      color: #3b5999;
      text-decoration: none;
      &:hover {
        font-weight: 700;
        background-color: #ddd;
      }
    }
  }
  main {
    flex: 1;
    padding: 0 20px;
  }
}
</style>
