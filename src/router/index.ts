import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import Settings from '@/views/Settings.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/home',
      name: 'finder',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
})

export default router
