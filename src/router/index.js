import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/', // 进去到layout不用写后缀了
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/my',
        name: 'MyIndex',
        component: () => import('@/views/my')
      },
      {
        path: '/video',
        name: 'VideoIndex',
        component: () => import('@/views/video')
      },
      {
        path: '/qa',
        name: 'QaIndex',
        component: () => import('@/views/qa')
      },
      // {
      //   path: '/particular/:idq',
      //   name: 'particular',
      //   component: () => import('@/views/qa')
      // },
      // {
      //   path: '/particular/',
      //   name: 'particular1',
      //   component: () => import('@/views/qa')
      // },
      // {
      //   path: '/particular/',
      //   name: 'particular2',
      //   component: () => import('@/views/qa')
      // },
      {
        path: '/particular3/:id',
        name: 'particular3',
        component: () => import('@/views/rou')
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
