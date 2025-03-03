import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { useHead } from '@vueuse/head'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Gunawan Firdaus Website',
        description: 'Welcome To Gunawan Firdaus Website!',
      },
    },
    // { path: '/about', component: () => import('@/views/AboutView.vue') },
    // { path: '/tech', component: () => import('@/views/TechView.vue') },
    // { path: '/project', component: () => import('@/views/ProjectView.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: 'Halaman Tidak Ditemukan',
        description: 'Oops! Halaman yang Anda cari tidak tersedia.',
      },
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

router.beforeEach((to) => {
  nextTick(() => {
    useHead({
      title: (to.meta.title as string) || 'Gunawan Firdaus Website',
      meta: [
        {
          name: 'description',
          content: (to.meta.description as string) || 'Welcome To Gunawan Firdaus Website!',
        },
      ],
    })
  })
})

export default router
