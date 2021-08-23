<template>
  <div class="home">
    <i class="el-icon-eleme"></i> SHOP-HOME
    <div>
      {{ $store.state }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  mounted () {
    console.log(this.$store)
  }
}
</script>
