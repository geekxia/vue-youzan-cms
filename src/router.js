import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=>import('@/views/home/Home.vue')
const Shop = ()=>import('@/views/shop/Shop.vue')
const Good = ()=>import('@/views/good/Good.vue')
const PublishGood = ()=>import('@/views/good/PublishGood.vue')



const router = new VueRouter({
  routes: [
    { path: '/shop', component: Shop},
    { path: '/good', component: Good},
    { path: '/publish', component: PublishGood},
    { path: '/', component: Home},
    { path: '/*', redirect: '/'}
  ]
})

export default router
