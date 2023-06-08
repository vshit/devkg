import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import { createPinia } from 'pinia'
import './assets/styles/index.css'
import Pagination from './components/Pagination.vue'
import Loading from './components/Loading.vue'

const app = createApp(App)
const rootContainer = document.getElementById('app')

app
    .component('Pagination', Pagination)
    .component('Loading', Loading)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount(rootContainer)

export default app
