<template lang="html">
<div class="login">
  <h3>登录页</h3>
  <el-button type="primary" @click='login'>登录</el-button>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      username: '1917',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    ...mapMutations('user', ['updateUserinfo']),
    login() {
      const data = {
        username: this.username,
        password: this.password
      }
      this.$http.fetchLogin(data).then(res=>{
        this.updateUserinfo(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('isLogin', 1)
        this.$router.replace('/')

      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
