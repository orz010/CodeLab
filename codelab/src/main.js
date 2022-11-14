import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  element,
  render: h => h(App)
}).$mount('#app')
