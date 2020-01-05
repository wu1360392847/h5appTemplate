import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import * as $http from './requests/index'

Vue.prototype.$http = $http

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// 导出Vue，router，api，可能会用到this，可使用rootVueObj
const rootVueObj = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

export default rootVueObj
