import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import store from "./store"
import router from "./router"


Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
