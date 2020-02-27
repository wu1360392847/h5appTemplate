<template>
  <div class="share">
    <div class="header">
      <div class="common_header_title_style">分享</div>
    </div>
    <div>分享页面</div>
    <button @click="goLogin">去到登录页面</button>
  </div>
</template>

<script>
export default {
  name: 'Share',
  data () {
    return {
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
