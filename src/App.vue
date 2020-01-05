<template>
  <div id="app">
    <router-view name="isLogin"></router-view>
    <header>
      <router-view name="AppHeader"></router-view>
    </header>
    <section class="section">
      <router-view name="mainWindow"></router-view>
    </section>
    <footer>
      <router-view name="AppFooter"></router-view>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100%;
}
header,
footer {
  display: flex;
  width: 100%;
}
footer {
  background: #fefefe;
  height: 12vw;
}
.section {
  flex: 1;
  overflow: auto;
}
.section::-webkit-scrollbar {
  display: none;
}
</style>
