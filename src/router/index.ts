import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/about', component: () => import('@/views/AboutView.vue') },
    { path: '/tech', component: () => import('@/views/TechView.vue') },
    { path: '/project', component: () => import('@/views/ProjectView.vue') },
  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
