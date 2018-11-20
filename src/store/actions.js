/*
 * @Author: 徐长剑
 * @Description: vuex 定义action文件
 * @Date: 2018-08-27 13:49:09
 * @Last Modified time: 2018-08-27 13:49:09
 */
import MutationsType from './type'

export default {
  // 进入app store
  setUser: ({ commit }, data) => {
    commit(MutationsType.SET_USERS, data)
  }
}
