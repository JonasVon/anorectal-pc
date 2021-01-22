import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import http from './api'

import './element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
