import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.axios = axios

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})