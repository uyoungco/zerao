<template>
  <div class="grid grid-cols-12 sm:mt-0 md:mt-0 lg:mt-10">
    <div class="col-start-2 col-span-10 sm:col-span-6 sm:col-start-4">
      <img :src="bgImage" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'logo-image',
  data () {
    return {
      bgImage: require('../assets/images/bg-image.png')
    }
  },
  methods: {},
  computed: {},
  components: {}
}
</script>

<style lang="scss">
  .logo-image-contaier {
    /*width: 80%;*/
    /*margin: 0 auto;*/
    /*position: relative;*/
    /*overflow: hidden;*/
    .image-conent {
      /*width: 80%;*/
      margin: 0 auto;
    }
    .bg-image {}
    img {
      width: 100%;
    }
  }
  //@media screen and(min-width: 1024px){
  //  .image-conent {
  //    width: 30%
  //  }
  //}
</style>
