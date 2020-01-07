<template lang="html">
<div class="form_filter">

  <!-- 第一行 -->
  <el-row type='flex' align='middle' class="row">
    <!-- 第一列 -->
    <el-col :span="3">
      <span>商品名称或编码:</span>
    </el-col>
    <el-col :span="4">
      <el-input size='small' v-model='value.name' placeholder="请输入内容"></el-input>
    </el-col>
    <!-- 第二列 -->
    <el-col :span="3">
      <span>商品分组:</span>
    </el-col>
    <el-col :span="4">
      <el-select placeholder="请选择" size='small' v-model='selVal'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
  </el-row>

  <!-- 第二行 -->
  <el-row type='flex' align='middle' class="row">
    <!-- 第三列 -->
    <el-col :span="3">
      <span>商品类型:</span>
    </el-col>
    <el-col :span="4">
      <el-select placeholder="请选择" size='small' v-model='selVal'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <!-- 第四列 -->
    <el-col :span="3">
      <span>总销量:</span>
    </el-col>
    <el-col :span="4">
      <div class="two_nums">
        <div>
          <el-input size='small'></el-input>
        </div>
        <div>-</div>
        <div>
          <el-input size='small'></el-input>
        </div>
      </div>
    </el-col>
  </el-row>

  <!-- 第三行 -->
  <el-row type='flex' align='middle' class="row">
    <el-col :span="3">
      <span>价格（元）:</span>
    </el-col>
    <el-col :span="4">
      <div class="two_nums">
        <div>
          <el-input size='small'></el-input>
        </div>
        <div>-</div>
        <div>
          <el-input size='small'></el-input>
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <span>库存扣减方式:</span>
    </el-col>
    <el-col :span="4">
      <el-select placeholder="请选择" size='small' v-model='selVal'>
        <el-option key='1' label='全部' value='1'></el-option>
        <el-option key='2' label='拍下扣减库存' value='2'></el-option>
        <el-option key='3' label='付款扣减库存' value='3'></el-option>
      </el-select>
    </el-col>
  </el-row>

  <!-- 第四行 -->
  <el-row>
    <el-col :span="4" :offset='3'>
      <el-button type="primary" size='small' @click="filterHandle">筛选</el-button>
      <el-button size='small'>导出</el-button>
    </el-col>
  </el-row>

</div>

</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
      return {
        selVal: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: ''
      }
    },
    methods: {
      filterHandle() {
        this.$emit('filter')
      }
    }
}
</script>

<style lang="scss" scoped>
.form_filter {
  background-color: rgb(248, 248, 248);
  box-sizing: border-box;
  padding: 15px;
  font-size: 14px;
  .row {
    margin-bottom: 20px;
  }
  span {
    display: block;
    text-align: right;
    padding-right: 5px;
  }
  .two_nums {
    &>div {
      display: inline-block;
    }
    &>div:nth-child(1) {
      width: 45%;
    }
    &>div:nth-child(2) {
      width: 10%;
      text-align: center;
    }
    &>div:nth-child(3) {
      width: 45%;
    }
  }
  .filter_btn {
    padding-top: 20px;
    padding-left: 10px;
  }
}
</style>
