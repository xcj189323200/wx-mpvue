<template>
    <div id="home">
        这是home
        <button @click="enter_clickHandler">购物车</button>
        <button @click="setVuex_clickHandler">设置vuex</button>
        <button open-type='getUserInfo' @getuserinfo='getUserInfo_handler'>获取用户信息</button>
        <button open-type='contact'>打开客服</button>
    </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  computed: {
  },
  data () {
    return {

    }
  },
  onLoad () {

  },
  onShow () {
    wx.getSetting({
      success: (res) => {
        console.log(res, 'getSetting')
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success: () => {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              this.getUserInfo_handler()
            }
          })
        } else {
          // this.getUserInfo_handler()
        }
      }
    })
  },
  onHide () {

  },
  onUnload () {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },

  components: {
  },
  methods: {
    ...mapActions(['setUser']),
    enter_clickHandler () {
    //   wx.navigateTo({
    //     url: '../car/index'
    //   })
      this.$router.push({path: '/pages/car/index', query: { id: 1 }})
    //   this.$router.push('/pages/car/index')
    },
    setVuex_clickHandler () {
      this.setUser({name: '小猪 哈哈哈'})
    },
    getUserInfo_handler (data) {
      console.log(data, 'data')
      // wx.getUserInfo({
      //   success: function (res) {
      //     console.log(res, 'res')
      //   // var nickName = userInfo.nickName
      //   // var avatarUrl = userInfo.avatarUrl
      //   // var gender = userInfo.gender // 性别 0：未知、1：男、2：女
      //   // var province = userInfo.province
      //   // var city = userInfo.city
      //   // var country = userInfo.country
      //   }
      // })
    }
  }
}
</script>

<style  scoped>
</style>
