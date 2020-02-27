/**
 * 该页面用于对state存储数据进行逻辑运算等时候使用
 */

export default {
  // 登录
  isLogin (state) {
    state.isLogin = JSON.parse(localStorage.isLogin)
    return state.isLogin
  },
}
