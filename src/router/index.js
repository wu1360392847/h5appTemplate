import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
}
)

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    next()
  }
  // 判断是否需要权限才能访问
  if (to.meta.isAuthRequired === true) {
    // 判断是否登录
    if (store.getters.isLogin === true) {
      next()
    } else {
      // 未登录去到登录
      next('/login')
    }
  } else {
    next()
  }
})

export default router
