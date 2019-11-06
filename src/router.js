import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home/Home.vue'
import Good from '@/views/good/Good.vue'
import Order from '@/views/order/Order.vue'
import Customer from '@/views/customer/Customer.vue'
import Login from '@/views/login/Login.vue'


const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/good',
      component: Good
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/customer',
      component: Customer
    },
    {
      path: '/login',
      components: {
        login: Login
      }
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next)=>{
  if (to.path === '/login') {
    console.log('未登录')
    next()
  } else {
    let res = localStorage.getItem('login')
    if (res && JSON.parse(res).isLogin) {
      next()
    } else {
      next('/login')
    }
    console.log('已登录')
  }
})

export default router
