<template>
  <div class="login">
    <button @click="goLogin">点击登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    goLogin () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
