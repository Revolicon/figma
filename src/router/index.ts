import { createMemoryHistory, createRouter } from 'vue-router'

import Finder from '@/views/Finder.vue'
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
      path: '/finder',
      name: 'finder',
      component: Finder,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
})

export default router
