import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { Button,Form,Footer, FormItem, } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Form)
// Vue.use(FormItem)
import './assets/css/common.scss'
Vue.config.productionTip = false

// 根据环境变量决定是否引入mock
if (process.env.NODE_ENV !== 'production' && !process.env.VUE_APP_BACK_END_URL) {
  const Mock = require('./mock/index').default
  Mock.mockData()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
