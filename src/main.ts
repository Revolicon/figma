import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import stores from './stores'

import './styles/main.scss'

const app = createApp(App)

app.use(stores)
app.use(router)

app.mount('#app')
