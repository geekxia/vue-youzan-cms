<template lang="html">
<div class="good">

  <!-- 自定义Tab -->
  <TabFilter v-model='tabIdx'></TabFilter>


  <div class="publish">
    <el-button @click='skip' type="primary" size='small'>发布商品</el-button>
  </div>

  <!-- 基于ElementUI的二次组件封装 -->
  <FormFilter v-model='formParams' @filter="filterHandle"></FormFilter>

  <!-- 表格 -->
  <GoodTable :list="list"></GoodTable>

  <!-- 直接使用分页组件 -->
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
// import { fetchGoodList } from '@/utils/api'
const TabFilter = ()=>import('./components/TabFilter.vue')
const FormFilter = ()=>import('./components/FormFilter.vue')
const GoodTable = ()=>import('./components/GoodTable.vue')

export default {
  // 局部路由守卫
  beforeRouteEnter(to,from,next) {
    const isLogin = localStorage.getItem('isLogin')
    if (isLogin == 1) {
      next()
    } else {
      next('/login')
    }
  },
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
        name: '',
        group_no: 0,
        type_no: 0,
        sale_min: 0,
        sale_max: 0,
        price_min: 0,
        price_max: 0,
        deduction_no: '0'
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
        // name: this.formParams.name,
        // group_no: this.formParams.group_no,   // 商品分组
        // type_no: this.formParams.type_no,     // 商品类型
        // sale_max: this.formParams.sale_max,
        // sale_min: this.formParams.sale_min,
        // price_max: this.formParams.price_max,
        // price_min: this.formParams.price_min,
        // deduction_no: this.formParams.deduction_no
        ...this.formParams
      }
      // 入参校验
      if (params.sale_max===0) delete params.sale_max
      if (params.price_max === 0) delete params.price_max
      this.$http.fetchGoodList(params).then(res=>{
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
