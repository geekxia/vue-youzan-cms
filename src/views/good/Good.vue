<template lang="html">
<div class="good">

  <TabFilter v-model='tabIdx'></TabFilter>

  <div class="publish">
    <el-button type="primary" size='small'>发布商品</el-button>
  </div>

  <FormFilter></FormFilter>

  <GoodTable></GoodTable>

  <div class="good_page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>

</div>
</template>

<script>
const TabFilter = ()=>import('./components/TabFilter.vue')
const FormFilter = ()=>import('./components/FormFilter.vue')
const GoodTable = ()=>import('./components/GoodTable.vue')


export default {
  components: {
    TabFilter,
    FormFilter,
    GoodTable
  },
  data: function() {
    return {
      tabIdx: '1',
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.good {
  .publish {
    padding: 20px 0;
  }
  .good_page {
    text-align: right;
    padding: 20px 0;
  }
}
</style>
