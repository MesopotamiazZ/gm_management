import axios from 'axios'
// import config from './config'
// import store from '@/store'
// import * as types from '@/store/types'

// import router from '../router'

// import { Message } from 'iview'
// import Message from '@/components/message'

// axios 配置
axios.defaults.timeout = 10000 // 请求超时事件
axios.defaults.baseURL = 'http://localhost:8081' // 服务器地址

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log('config', config)
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(response => {
  return response.data.data
})

export default axios
