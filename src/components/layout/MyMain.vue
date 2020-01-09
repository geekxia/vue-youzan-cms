<template lang="html">
  <div class='main'>
    <router-view></router-view>
    <div class="logo">logo</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main {
  background: white;
  height: 100%;
  padding: 0 15px;
  min-width: 1000px;
  .logo {
    line-height: 80px;
    text-align: center;
    font-size: 30px;
  }
}
</style>
