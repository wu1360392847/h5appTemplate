<template>
  <div class="header">
    <div class="goBack" @click="goBack"></div>
    <!-- <div class="common_header_title_style">首页</div> -->
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 10vw;
  background-color: #e74c3c;
}
.goBack {
  width: 3vw;
  height: 3vw;
  border-left: 0.8vw solid #fff;
  border-bottom: 0.8vw solid #fff;
  transform: rotateZ(45deg);
  margin-left: 4vw;
  margin-top: 3.5vw;
}
</style>
