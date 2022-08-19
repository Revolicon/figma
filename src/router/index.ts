import { createMemoryHistory, createRouter } from 'vue-router'

import Finder from '@/views/Finder.vue'
import FinderIcons from '@/views/Finder/Icons.vue'
import FinderCategories from '@/views/Finder/Categories.vue'

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
      children: [
        {
          path: 'icons',
          name: 'finder-icons',
          component: FinderIcons,
        },
        {
          path: 'categories',
          name: 'finder-categories',
          component: FinderCategories,
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
})

export default router
