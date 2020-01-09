import Vue from 'vue'
import App from './App.vue'


// 全局安装element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 路由挂载
import router from './router'
import store from './store'

// 把所有接口方法，都放在$http对象上
import http from './utils/api'
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
