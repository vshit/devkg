import JobsPage from '../views/JobsPage.vue'
import JobDetailedPage from '../views/JobDetailedPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
	{ path: '/', component: JobsPage },
	{ path: '/job/:slug', component: JobDetailedPage },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
