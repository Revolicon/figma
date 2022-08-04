import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
  ],
})

export default router
