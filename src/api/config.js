const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()

switch ((process.TYPE_ENV)) {
  case 'production':
    fly.config.baseURL = 'https://dpcn.17dianjia.net'
    break
  case 'testing':
    fly.config.baseURL = 'https://dpcn.17dianjia.net'
    break
  default:
    fly.config.baseURL = 'https://dpcn.17dianjia.net'
    break
}
fly.interceptors.request.use(request => {
  const token = wx.getStorageSync('token')
  if (token) {
    request.headers['Authorization'] = 'Bearer ' + token
  }
  return request
})
fly.interceptors.response.use(
  response => {
    return response
  },
  err => {
    let code = err.status
    switch (code) {
      case 500 :
        if (err.response.data) {
          wx.showToast({
            title: err.response.data.message || '',
            icon: 'none',
            duration: 3000
          })
        }
        break
      case 401:

        break
      case 403:
        break
    }
    return err
  }
)
export default fly
