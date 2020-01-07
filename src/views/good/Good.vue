<template lang="html">
<div class="good">

  <TabFilter v-model='tabIdx'></TabFilter>

  <div class="publish">
    <el-button @click='skip' type="primary" size='small'>发布商品</el-button>
  </div>

  <FormFilter v-model='formParams' @filter="filterHandle"></FormFilter>

  <GoodTable :list="list"></GoodTable>

  <div class="good_page">
    <el-pagination
      @size-change="sizeHandle"
      @current-change="pageHandle"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>

</div>
</template>

<script>
import { mapState } from 'vuex'
import { fetchGoodList } from '@/utils/api'
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
      tabIdx: '-1',
      currentPage: 1,
      currentSize: 5,
      list: [],
      total: 0,
      formParams: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState('good', ['msg'])
  },
  watch: {
    tabIdx() {
      // alert(val)
      this.changeList()
    }
  },
  mounted() {
    // 入参
    this.changeList()
  },
  methods: {
    // 调接口
    changeList() {
      const params = {
        status_no: this.tabIdx, // 1-销售中 2-已售罄 3-仓库中
        page: this.currentPage, // 分页页码
        size: this.currentSize,  // 每页的数量
        name: this.formParams.name
      }
      fetchGoodList(params).then(res=>{
        console.log('res', res)
        this.list = res.list
        this.total = res.total
      })
    },
    // 发布商品 按钮点击
    skip() {
      this.$router.push('/publish')
    },
    sizeHandle(val) {
      console.log(`每页 ${val} 条`);
      this.currentSize = val
      this.changeList()
    },
    pageHandle(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.changeList()
    },
    filterHandle() {
      console.log('父组件 执行筛选')
      this.changeList()
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
    padding: 15px 0;
    text-align: right;
  }
}
</style>
