import { defineStore } from 'pinia'
import { ReadOnlyApiService } from '../services/readonlyApi'

const ApiService = new ReadOnlyApiService('pages/job')

export const useJobStore = defineStore('jobStore', {
	state: () => {
		return {
			isLoading: false,
			error: undefined,
			job: {},
			organizationJobs: [],
			relatedJobs: [],
		}
	},
	actions: {
		async fetchJob(slug) {
			try {
				this.isLoading = true
				const res = await ApiService.getBySlug(slug)
				this.job = res.result.job
				this.organizationJobs = res.result.byOrganization
				this.relatedJobs = res.result.related
			} catch (error) {
				this.error = error
			} finally {
				this.isLoading = false
			}
		},
		resetStore() {
			this.job = {}
			this.organizationJobs = []
			this.relatedJobs = []
		},
	},
})
