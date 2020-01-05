<template>
  <div class="app">

    <!-- 用户未登录 -->
    <div v-if='$route.path === "/login"'>
      <router-view name='login'></router-view>
    </div>

    <!-- 用户已登录 -->
    <div v-else class="wrap">
      <el-container style="height:100%;">
        <el-aside width='135px'><Aside></Aside></el-aside>
        <el-container>
          <el-header><Header></Header></el-header>
          <el-main><Main></Main></el-main>
        </el-container>
      </el-container>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Main from '@/components/Main.vue'
export default {
  name: 'app',
  data: function() {
    return {
      isLogin: true
    }
  },
  updated() {
    console.log('App $route',this.$route)
  },
  components: {
    Aside,
    Header,
    Main
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  background: rgba(247, 248, 250, 1);
  height: 100%;
  width: 100%;
}
.app {
  color: #2c3e50;
  height: 100%;
  width: 100%;
  overflow: auto;
  &>div {
    height: 100%;
    width: 100%;
  }
}
</style>
