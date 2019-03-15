import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function asyncGetRouter(name){
    return (resolve) => require([`@/components/${name}.vue`],resolve)
}

export default new Router({
  routes: [
      {
        path: '/Hello',
        name: 'Hello',
        component: asyncGetRouter('Hello')
      }
  ]
})
