import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '#cases',
        component: () => import('@/views/Sections/Cases.vue'),
        meta: { section: 'cases' }
      },
      {
        path: '#services',
        component: () => import('@/views/Sections/Services.vue'),
        meta: { section: 'services' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // 顶部留出导航栏高度
      }
    }
  }
})



export default router