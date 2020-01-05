/**
 *  该文件用于异步请求并使用mutations中的方法进行修改state数据;
 */

export default {
  // 示例
  // 异步实现登录处理
  loginAsync (ctx) {
    setTimeout(() => {
      console.log(ctx)
      // 更新状态
      // action 中不能直接更新状态，需要 commit 提交 mutation 来更新状态
      ctx.commit('loginSuccess')
    }, 1000)
  }
}
