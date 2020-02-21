<template>
  <div class="home">
    <div class="header">
      <div class="common_header_title_style">首页</div>
    </div>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <br />
    <br />
    vueX 数据测试
    {{this.$store.state.ceshi}}
    <br />
    <br />--组件测试--
    <br />
    <div class="clearfloat">
      <div class="right">456</div>
      <div class="left">789</div>
    </div>
    <div>123</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  created () {
    // 请求测试
    this.$http.getSecurityCode().then(res => {
      console.log(res)
    })
    this.$http.getSecurityCode2().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="less" scoped>
</style>
