import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import stores from './stores'

// @ts-ignore
import InstantSearch from 'vue-instantsearch/vue3/es'
// @ts-ignore
import VueObserveVisibility from 'vue-observe-visibility'

import './styles/main.scss'

const app = createApp(App)

app.use(InstantSearch)
app.use(VueObserveVisibility)
app.use(stores)
app.use(router)

app.mount('#app')
