import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    // { path: '/about', component: () => import('@/views/AboutView.vue') },
    // { path: '/tech', component: () => import('@/views/TechView.vue') },
    // { path: '/project', component: () => import('@/views/ProjectView.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],

  scrollBehavior(to) {
    return new Promise((resolve) => {
      nextTick(() => {
        if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        } else {
          resolve({ top: 0, behavior: 'smooth' })
        }
      })
    })
  },
})

export default router
