<template>
  <div class="">
    <Logo />
    <div class="text-white m-10 md:m-40 leading-7 select-text text-center">
      <div class="mb-10 text-2xl">联系我们</div>
      <div class="text-base">
        <p>电话：132-6264-5191</p>
        <p>邮箱：ZERAOchina#163.com</p>
        <p>网址：www.zerao.com.cn</p>
        <br />
        <p>招贤纳才：ZERAOHR#163.com</p>
        <p>注：请将#换成@</p>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '@/components/Logo'
export default {
  name: 'contact',
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: { Logo }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/mixin";
  .contact-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .logo {
      width: 50%;
      flex: 0 0 30%;
      display: flex;
      justify-content: center;
      align-items: center;
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
        p {
          line-height: 1.2;
        }
      }
    }
  }
</style>
