<template>
  <div class="home">
    <i class="el-icon-eleme"></i> HOME
    <div>{{ $store.state }}</div>
    <el-button type="primary" @click="change">primary</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  change () {
    this.$store.commit('RESET_GLOBAL_STATE', {
      key: 'basic',
      value: {
        token: `${Math.random().toString(36).substr(2)}`
      }
    })
  }
}
</script>
