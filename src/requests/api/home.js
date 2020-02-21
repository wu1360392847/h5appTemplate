/**
 * 请求文件
*/
import { get, post } from '../index'

//  示例
export const getSecurityCode2 = () => {
  return get('/api/get_captcha')
}

// get
export const lotteryListTitle = lotteryid => {
  return get(`/methodtitle/getListTitle?lottery_id=${lotteryid}`)
}

// post
export const ordersAnOrder = anorder => {
  return post('/orders/anOrder', anorder)
}
