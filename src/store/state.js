/**
 * 此为vuex进行状态管理,数据存储统一存放js文件
 */

const state = {
  // 测试vueX
  ceshi: '123',
  // 用户登录状态
  isLogin: localStorage.isLogin,
  // 用户昵称
  user: [],
  username: '',
  password: ''
}

// 判断是否有本地登录信息，没有就添加一个
if (localStorage.user) {
  let users = JSON.parse(localStorage.user)
  state.user = state.user.concat(users)
} else {
  let _user = {
    username: '11',
    password: '22'
  }
  state.user = state.user.concat(_user)
  localStorage.user = JSON.stringify(_user)
}

if (!localStorage.isLogin) {
  localStorage.isLogin = false
}

export default state
