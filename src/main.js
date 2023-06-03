import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { createPinia } from 'pinia'
import './assets/styles/index.css'

const app = createApp(App)
const rootContainer = document.getElementById('app')

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount(rootContainer)

export default app
