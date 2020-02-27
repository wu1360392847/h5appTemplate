<template>
  <div class="header">
    <div class="goBack" @click="goBack"></div>
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

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 10vw;
  background: $bg-color-title;
}
.goBack {
  width: 2.5vw;
  height: 2.5vw;
  border-left: $border-table-color-small;
  border-bottom: $border-table-color-small;
  transform: rotateZ(45deg);
  margin-left: 4vw;
  margin-top: 3.6vw;
}
</style>
