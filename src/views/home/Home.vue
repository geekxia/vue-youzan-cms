<template lang="html">
<div>
  <h1>首页概况</h1>

  <div>
    <el-row type="flex" class="row-bg" align='middle'>
      <el-col :span='2'>用户名：</el-col>
      <el-col :span="5">
        <el-input placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span='3'>密码：</el-col>
      <el-col :span="6">
        <el-input placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span='2'>手机：</el-col>
      <el-col :span="6">
        <el-input placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
  </div>

</div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
</style>
