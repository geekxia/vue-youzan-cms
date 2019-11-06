<template lang="html">
<div>
  <h1>登录页</h1>
  <el-button type="primary" @click='login'>主要按钮</el-button>
</div>
</template>

<script>
export default {
  methods: {
    login() {
      let res = {
        isLogin: true,
        token: 'token'
      }
      localStorage.setItem('login', JSON.stringify(res))
      setTimeout(()=>{
        this.$router.replace('/')
      }, 1000)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
