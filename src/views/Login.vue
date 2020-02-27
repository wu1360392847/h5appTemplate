<template>
  <div class="login">
    <div class="header">
      <div class="common_header_title_style">登录</div>
    </div>
    <div class="section">
      <div class="login_body">
        <div class="username_box">
          <label>
            <i class="iconfont">&#xe638;</i>
            <input type="text" placeholder="邮箱或手机号" v-model="username" />
            <i class="iconfont" @click="username = ''">&#xe654;</i>
          </label>
        </div>
        <div class="password_box">
          <label>
            <i class="iconfont">&#xe669;</i>
            <input type="password" v-if="ispassword === 0" placeholder="密码" v-model="password" />
            <input type="text" v-if="ispassword !== 0" placeholder="密码" v-model="password" />
            <i class="iconfont" v-if="ispassword === 0" @click="lookPassword">&#xe664;</i>
            <i class="iconfont" v-if="ispassword !== 0" @click="lookPassword">&#xe61d;</i>
          </label>
        </div>
        <div class="but_login">
          <button @click="goLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      ispassword: 0,
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    // 映射的mutations中的方法
    ...mapMutations(['loginSuccess', 'logExit']),
    // 登录
    goLogin () {
      if (this.user[0].username == this.username && this.user[0].password == this.password) {
        if (localStorage.isLogin) {
          this.loginSuccess()
        } else {
          window.localStorage.setItem('isLogin', 'true')
          this.loginSuccess()
        }
        this.$router.push('/home')
      } else {
        alert('登录信息错误')
      }

    },
    // 是否显示密码
    lookPassword () {
      if (this.ispassword === 0) { this.ispassword = 1 } else { this.ispassword = 0 }
    }
  }
}
</script>

<style lang="scss" scoped>
.login_body {
  width: 80%;
  height: 100%;
  margin: 6vw auto;
  .username_box,
  .password_box {
    width: 100%;
    height: 8vw;
    border: $border-table-color-small;
    border-radius: 1.2vw;
    margin-bottom: 2.5vw;
    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        line-height: 8vw;
        margin: 0 3vw;
        color: $font-color-small;
        font-size: $font-size-small;
      }
      input {
        width: 75%;
        border: none;
        font-size: $font-size-small + 0.3;
      }
    }
  }
  .but_login {
    button {
      width: 50%;
      height: 8vw;
      margin: 10vw auto;
      display: block;
      border: $border-table-color-small;
      border-radius: 1.2vw;
    }
  }
}
</style>
