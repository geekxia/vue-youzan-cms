<template lang="html">
<div class="good">
  <el-button type="primary">主要按钮</el-button>
  <div class="filter">
    <el-row align='middle' type='flex' :gutter="20">
      <el-col :span='3'>
        <span>商品名称或编码：</span>
      </el-col>
      <el-col :span='5'>
        <el-input></el-input>
      </el-col>
      <el-col :span='3'>
        <span>商品分组：</span>
      </el-col>
      <el-col :span='5'>
        <el-select placeholder="请选择" v-model='group'>
          <el-option
            v-for="item in groups"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span='3'>
        <span>商品分组：</span>
      </el-col>
      <el-col :span='5'>
        <el-select placeholder="请选择" v-model='group'>
          <el-option
            v-for="item in groups"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span='3'>
        <span>总销量：</span>
      </el-col>
      <el-col :span='2'>
        <el-input></el-input>
      </el-col>
      <el-col :span='1'>
        <span class="line">-</span>
      </el-col>
      <el-col :span='2'>
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      groups: [{label:'足球', value: 1}, {label:'篮球', value: 2}],
      group: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.good {
  padding: 20px;
}
.filter {
  background: rgba(248, 248, 248, 1);
  margin-top: 20px;
  padding: 20px;
  span {
    display: block;
    text-align: right;
  }
  span.line {
    text-align: center;
    line-height: 40px;
  }
}
</style>
