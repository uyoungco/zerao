<template>
  <div class="">
    <Logo />
    <div class="text-white m-10 md:m-40 leading-7 select-text text-center">
      <div class="mb-10 text-2xl">关于我们</div>
      <div class="text-base">
        <p class="mb-3">从人性出发打造真正需要的产品</p>
        <p class="mb-3">从艺术视角精雕细琢每个细节</p>
        <p class="mb-3">以用户体验为最高标准</p>
        <p class="mb-3">以创新创造为核心驱动力</p>
        <p>做一家受世人尊敬的伟大企业</p>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'about',
  data () {
    return {}
  },
  methods: {},
  components: { Logo }
}
</script>

<style lang="scss">
  @import "../assets/style/mixin";
  .text-indent {
    text-indent: 2em;
  }
  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 50%;
      flex: 0 0 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: px2rem(30) 0;
      img {
        width: 100%;
      }
    }
    .content-wrapper {
      flex: 0 0 70%;
      width: 80%;
      color: white;
      margin-bottom: px2rem(30);
      .title {
        text-align: center;
        font-size: px2rem(28);
      }
      .content {
        margin-top: px2rem(30);
        font-size: px2rem(18);
        line-height: 1.5;
        text-indent: 2em;
        p {
          margin-bottom: px2rem(10);
        }
      }
    }
  }
</style>
