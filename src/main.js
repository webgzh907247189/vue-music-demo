import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.axios = axios
console.log(router, 'router')
new Vue({
    el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})