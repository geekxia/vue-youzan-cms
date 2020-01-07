<template>
  <div class="app">

    <el-container class="app-container">
      <!-- 左侧导航菜单 -->
      <el-aside width="135px">
        <MyAside></MyAside>
      </el-aside>

      <el-container>
        <!-- 顶部banner -->
        <el-header height='55px' class="app-header">
          <MyHeader></MyHeader>
        </el-header>

        <!-- 内容的主体区域 -->
        <el-main class="app-main">
          <MyMain></MyMain>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

import MyAside from '@/components/layout/MyAside.vue'
import MyHeader from '@/components/layout/MyHeader.vue'
import MyMain from '@/components/layout/MyMain.vue'

export default {
  name: 'app',

  components: {
    MyAside,
    MyHeader,
    MyMain
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: rgba(247, 248, 250, 1);
}
.app {
  height: 100%;
  .app-container {
    height: 100%;
  }
  .app-header {
    padding-left: 0;
    padding-right: 0;
  }
  .app-main {
    padding-bottom: 0;
    padding-right: 0;
  }
}




</style>
