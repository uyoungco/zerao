<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
// document.addEventListener('DOMContentLoaded', () => {
//   const html = document.querySelector('html')
//   let fontSize = window.innerWidth / 10
//   fontSize = fontSize > 50 ? 50 : fontSize
//   html.style.fontSize = fontSize + 'px'
// })
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
