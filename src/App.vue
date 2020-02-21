<template>
  <div id="app">
    <div class="loginhtml">
      <router-view name="AppLogin"></router-view>
    </div>
    <div class="apphtml">
      <header class="apphtml_header">
        <router-view name="AppHeader"></router-view>
      </header>
      <section class="apphtml_section">
        <router-view name="mainWindow"></router-view>
      </section>
      <footer class="apphtml_footer">
        <router-view name="AppFooter"></router-view>
      </footer>
    </div>
  </div>
</template>

<script>
import './assets/css/commonStyle.css'
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.apphtml {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.apphtml_header,
.apphtml_footer {
  display: flex;
  width: 100%;
}
.apphtml_footer {
  background: #fefefe;
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
