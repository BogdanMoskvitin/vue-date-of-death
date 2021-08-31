import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import FifthQuestion from '../components/FifthQuestion'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fifth',
    name: 'FifthQuestion',
    component: FifthQuestion
  },
  {
    path: '/fourth', name: 'Fourth', component: () => import('../components/FourthQuestion.vue')
  },
  {
    path: '/second', name: 'Second', component: () => import('../components/SecondQuestion.vue')
  },
  {
    path: '/third', name: 'Third', component: () => import('../components/ThirdQuestion.vue')
  },
  {
    path: '/end', name: 'End', component: () => import('../components/End.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
