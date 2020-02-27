<template>
  <div id="app">
    <div class="apphtml">
      <!-- 公用头部 -->
      <router-view class="apphtml_header" name="AppHeader"></router-view>
      <!-- 公用主体部分 -->
      <section class="apphtml_section">
        <!-- 登录 -->
        <router-view name="AppLogin"></router-view>
        <!-- 主页面 -->
        <router-view name="mainWindow"></router-view>
      </section>
      <!-- 公用尾部 -->
      <router-view class="apphtml_footer" name="AppFooter"></router-view>
    </div>
  </div>
</template>

<script>
import './assets/css/commonStyle.css'
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', '宋体', Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 样式重置
  color: $font-color-small;
  font-size: $font-size-small;
  background: $bg-color-small;
  // 其他
  height: 100%;
}
.apphtml {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.apphtml_header,
.apphtml_footer {
  display: flex;
  width: 100%;
}
.apphtml_footer {
  background: $bg-color-small;
  height: 12vw;
}
.apphtml_section {
  flex: 1;
  overflow: auto;
}
.apphtml_section::-webkit-scrollbar {
  display: none;
}
</style>
