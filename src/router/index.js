import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const JobsPageAsync = defineAsyncComponent(() =>
	import('../views/JobsPage.vue')
)
const JobDetailedPageAsync = defineAsyncComponent(() =>
	import('../views/JobDetailedPage.vue')
)
const OrganizationsPageAsync = defineAsyncComponent(() =>
	import('../views/OrganizationsPage.vue')
)
const OrganizationDetailedPageAsync = defineAsyncComponent(() =>
	import('../views/OrganizationDetailedPage.vue')
)

export const routes = [
	{ path: '/', component: JobsPageAsync },
	{ path: '/job/:slug', component: JobDetailedPageAsync },
	{ path: '/organizations', component: OrganizationsPageAsync },
	{ path: '/organizations/:slug', component: OrganizationDetailedPageAsync },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
