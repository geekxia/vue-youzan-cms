import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('@/views/home/Home.vue')
const Shop = ()=>import('@/views/shop/Shop.vue')
const Good = ()=>import('@/views/good/Good.vue')
const PublishGood = ()=>import('@/views/good/PublishGood.vue')
const Login = ()=>import('@/views/login/Login.vue')

const router = new VueRouter({
  routes: [
    { path: '/', component: Home},
    { path: '/shop', component: Shop},
    { path: '/good', component: Good},
    { path: '/good/publish', component: PublishGood, parent:'/good'},
    {
      path: '/login',
      components: {
        login: Login   // 具名视图
      }
    },
    { path: '/*', redirect: '/'}
  ]
})


// 全局守卫
router.beforeEach((to,from,next)=>{
  // console.log(to,from)
  const isLogin = true
  if (to.path === '/login') {
    next()
  } else {
    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  }

})

export default router
