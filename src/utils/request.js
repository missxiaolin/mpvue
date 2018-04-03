import Fly from 'flyio'

const request = new Fly()

// 请求超时时间
request.config.timeout = 10 * 1000
// 请求URL地址
request.config.baseURL = process.env.BASE_URL

request.interceptors.request.use((config, promise) => {
    // 给所有请求添加自定义header
  let headers = {
    'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
  config.headers = headers
  return config
})

request.interceptors.response.use(
  (response, promise) => {
    // 返回结果
    return promise.resolve(response.data)
  },
  (err, promise) => {
    // 错误信息
    console.log(err)
    return promise.resolve()
  }
)

export default request
