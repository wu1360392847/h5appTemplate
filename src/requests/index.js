/**
 * 该文件用于统一管理ajax请求
 */

import axios from 'axios'
import qs from 'qs'
// vue实例 (this)
// import rootVueObj from '../main.js'

// 不同环境不同地址
let apis = {
  production: 'http://www.api.kxf968.com', // 线上 (生成环境)
  development: 'http://192.168.8.170:82', // 本地 (开发环境)
  accessHomeData: 'http://www.xmyxapp.com' // 其他api
}

// ajax请求设置
const ajax = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? apis.production : apis.development
})
// 发送前请求拦截
ajax.interceptors.request.use(
  config => {
    // Indicator.open('loading...')
    // let headers = 'application/x-www-form-urlencoded; charset=UTF-8'
    // config.headers['Content-Type'] = headers
    if (config.type === 'formData' || config.method !== 'post') {
      return config
    }
    config.data = qs.stringify(config.data)
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 渲染前的响应拦截
ajax.interceptors.response.use(res => {
  // Indicator.close()
  if (res.status === 200 && res.data.code === 200) {
    return res.data.data
  }
})
/**
 * 以下为各个请求,请根据请求内容注明使用用途 ;
 */

//  示例
export const getCategories = () => {
  return ajax.get('/api/tabs?sa=')
}

// get
export const lotteryListTitle = lotteryid => {
  return ajax.get(`/methodtitle/getListTitle?lottery_id=${lotteryid}`)
}

// post
export const ordersAnOrder = anorder => {
  return ajax.post('/orders/anOrder', anorder)
}

// 如在apis.cfg中请求用法
export const accessHomeData = () => {
  return ajax.get(apis.accessHomeData)
}
