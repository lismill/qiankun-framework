<template>
  <div class="home">
    Member-home
    <el-button>asd</el-button>
    <div>
      {{ $store.state }}
    </div>
    <i class="el-icon-edit"></i>
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
