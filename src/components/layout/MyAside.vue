<template lang="html">
  <div class="aside">
    <div class="logo">
      <i class="fa fa-thumbs-up"></i>
    </div>

    <div v-for="(item, idx) in navs" :key='idx'>
      <router-link :to="item.path" active-class='nav_on' tag="span">
        <div class="nav">
          <i class="fa" :class='item.icon'></i>
          <span v-text="item.text"></span>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      navs: [
        {path: '/shop', text:'店铺管理', icon:'fa-camera-retro'},
        {path: '/good', text:'商品管理', icon:'fa-home'},
        {path: '/order', text:'订单管理', icon:'fa-book'}
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.aside {
  height: 100%;
  width: 100%;
  background: rgba(68, 68, 68, 1);
  .nav {
    color: #aaa;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    > span {
      padding-left: 5px;
    }
  }
  .nav:hover {
    background: rgba(102, 102, 102, 1);
    color: white;
  }
  .nav_on .nav {
    background: white;
    color: black;
  }
  .logo {
    height: 80px;
    box-sizing: border-box;
    padding-top: 20px;
    text-align: center;
    > i {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 50%;
      background: white;
      font-size: 24px;
      color: rgba(238, 0, 0, 1);
      cursor: pointer;
    }
  }
}
</style>
