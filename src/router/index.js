import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import DocView from '../views/DocView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/doc',
    name: 'DocView',
    component: DocView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
