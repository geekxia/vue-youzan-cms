<template lang="html">
<div class="tab_filter">
  <span :class="{'on': value==='-1'}" @click="$emit('input', '-1')">全部</span>  
  <span :class="{'on': value==='1'}" @click="$emit('input', '1')">销售中</span>
  <span :class="{'on': value==='2'}" @click="$emit('input', '2')">已售罄</span>
  <span :class="{'on': value==='3'}" @click="$emit('input', '3')">仓库中</span>
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.tab_filter {
  line-height: 50px;
  border-bottom: 1px solid #eee;
  &>span {
    display: inline-block;
    width: 80px;
    text-align: center;
    margin-right: 20px;
    font-size: 14px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }
  &>span.on {
    border-color: rgb(64, 158, 255);
  }
}
</style>
