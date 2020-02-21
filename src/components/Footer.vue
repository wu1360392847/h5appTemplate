<template>
  <ul>
    <li v-for="nav in navs" :key="nav.name" class="tabbar">
      <router-link :to="nav.path" tag="span">
        <i v-html="nav.meta.icon"></i>
        <p>{{nav.meta.title}}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import routes from '../router/routes.js'
export default {
  name: 'AppFooter',
  data () {
    return {
      navs: routes.filter(route => route.meta.isNav)
    }
  }
}
</script>

<style lang="less" scoped>
.tabbar {
  width: 25%;
  text-align: center;
  cursor: pointer;
}
ul {
  display: flex;
  width: 100%;
  height: 100%;
  border-top: 0.1vw solid #999;
}
p {
  font-size: 3vw;
}
ul .router-link-exact-active {
  color: #f40;
}
i {
  font-style: normal;
  font-family: 'iconfont';
  font-size: 5vw;
  line-height: 7vw;
  font-weight: 600;
}
</style>
