import Vue from 'vue'
import Vuex from 'vuex'
/**
 * 此为vuex总输出页面,需要进行对应操作请前往对应子页面
 */
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state, // 状态
  getters, // getter，相当于计算属性
  mutations, // 更新状态，同步
  actions // 异步
})
