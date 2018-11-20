<template>
    <div id="home">
        这是home
        <button @click="enter_clickHandler">购物车</button>
        <button @click="setVuex_clickHandler">设置vuex</button>
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
    }
  }
}
</script>

<style  scoped>
</style>
