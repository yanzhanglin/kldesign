import { createRouter, createWebHistory } from 'vue-router'

// 1. 导入页面组件
const HomeView = () => import('@/views/HomeView.vue')
const CasesView = () => import('@/views/CasesView.vue')
const TeamView = () => import('@/views/TeamView.vue')
const ServicesView = () => import('@/views/ServicesView.vue')
const ContactView = () => import('@/views/ContactView.vue')

// 2. 定义路由规则
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/cases', name: 'Cases', component: CasesView },
  { path: '/team', name: 'Team', component: TeamView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/contact', name: 'Contact', component: ContactView }
]

// 3. 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router