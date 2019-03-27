import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueApollo from 'vue-apollo'
import { apolloClient } from '@/graphql/graphql'
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.use(VueApollo)

Vue.prototype.axios = axios
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

new Vue({
	el: '#app',
	router,
    template: '<App/>',
    provide: apolloProvider.provide(),
	components: {
		App
	}
})
