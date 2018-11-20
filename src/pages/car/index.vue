<template>
  <div id="home">
      这是购物车
      {{getUser.name}}
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getUser'])
  },
  data () {
    return {

    }
  },
  onLoad (opt) {
    let { id } = opt
    console.log('this is car onload ', id)
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
  }
}
</script>

<style  scoped>
</style>
