import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function asyncGetRouter(name) {
	return (resolve) => require([`@/components/${name}.vue`], resolve)
}

export default new Router({
	// mode: 'history',
	routes: [{
			path: '/',
			name: 'Hello',
			component: asyncGetRouter('hello')
		},
		{
			path: '/hello2',
			name: 'Hello2',
			component: asyncGetRouter('hello2')
		}
	]
})
