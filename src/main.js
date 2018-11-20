import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.prototype.$http = api
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
