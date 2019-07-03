import Vue from 'vue'
import Router from 'vue-router'
import Tasks from './components/Tasks.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/About',
      name: 'About',
      component: About
    }
  ]
})