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
			name: 'Test',
			component: asyncGetRouter('test/test')
        },
        {
			path: '/test2',
			name: 'Test2',
			component: asyncGetRouter('test/test2')
		}
	]
})
