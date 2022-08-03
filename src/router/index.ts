import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/Welcome.vue'),
    },
  ],
})

export default router
