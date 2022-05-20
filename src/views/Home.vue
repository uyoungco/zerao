<template>
  <div class="flex flex-1 h-full flex-col items-center">
    <Logo />
    <logo-image class="logo-image"></logo-image>
    <div class="mt-5 md:mt-0 home-title text-white subpixel-antialiased text-center">
      <p class="text-2xl md:text-4xl lg:text-6xl sm:mb-5 ">种种精彩已准备就绪!</p>
      <p class="text-1xl md:text-2xl lg:text-4xl">All kinds of excitement are ready!</p>
    </div>
    <div class="abolt text-white my-10">
      <div>
        <router-link tag="span" to="/about">关于我们</router-link >
        <span>丨</span>
        <router-link tag="span" to="/contact">联系我们</router-link >
      </div>
      <div class="text-center my-5">
        <a target="_blank" class="text-xs" href="http://beian.miit.gov.cn/?spm=zm5102-001.0.0.2.K0RjBO">沪ICP备18040660号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
import LogoImage from '../components/home-image'
import Logo from '@/components/Logo'

export default {
  name: 'home',
  components: {
    LogoImage,
    Logo
  }
}
</script>

<style lang="scss">
  @import "../assets/style/mixin";
  .home {
    ///*position: relative;*/
    //z-index: 100;
    ///*width: 100%;*/
    //height: 100%;
    //background: #000000;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-between;
    //align-items: center;
    color: white;

    .home-title {
    }
    .abolt {
    }
  }
</style>
