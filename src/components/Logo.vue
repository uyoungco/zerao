<template>
  <div class="logo m-10 pointer" @click="goHome">
    <div class="w-6/12 mx-auto sm:w-1/12">
      <img :src="logo" alt="" >
    </div>
  </div>
</template>
<script>
export default {
  name: 'Logo',
  data () {
    return {
      logo: require('../assets/images/logo2.png')
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  computed: {},
  components: {}
}
</script>

<style coped>

</style>
