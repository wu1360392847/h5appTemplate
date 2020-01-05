/**
 * 该文件用于修改vuex的state数据,且只可调用本页面方法进行修改
 */

export default {
  // 示例
  // 第一个参数操作satte,第二个是要加的数据
  addToCart (state, prodst) {
    const has = state.cart.some(proded => proded.id === prodst.id)
    if (has) {
      state.cart = state.cart.map(prods => {
        if (prods.id === prodst.id) {
          prods.amount += 1
        }
        return prods
      })
    } else {
      state.cart.push({
        ...prodst,
        amount: 1,
        isChecked: true
      })
    }
    // 保存到 localStorage
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }
}
