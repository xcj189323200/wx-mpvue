/**
 * Created by Administrator on 2017/1/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import actions from './actions'
// import Local from '@utils/local'
import plugins from './plugins'

Vue.use(Vuex)

const _DEBUG = process.env.NODE_ENV !== 'production'
Vue.config.debug = _DEBUG

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: Object.values(plugins),
  strict: _DEBUG
})
