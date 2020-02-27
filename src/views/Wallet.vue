<template>
  <div class="wallet">
    <div class="header">
      <div class="common_header_title_style">钱包</div>
    </div>
    <div>钱包页面</div>
    <button @click="loginExit">点击退出</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'wallet',
  data () {
    return {
    }
  },
  methods: {
    // 映射的mutations中的方法
    ...mapMutations(['logExit']),
    loginExit () {
      this.logExit()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
