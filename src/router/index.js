import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('@/views/Login.vue')
const About = () => import('@/views/About.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
