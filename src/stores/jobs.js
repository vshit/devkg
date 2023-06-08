import { defineStore } from 'pinia'
import { ReadOnlyApiService } from '../services/readonlyApi'

const apiService = new ReadOnlyApiService('pages/jobs')

export const useJobsStore = defineStore('jobsStore', {
	state: () => {
		return {
			isLoading: false,
			error: undefined,
			jobs: [],
			page: 1,
		}
	},
	actions: {
		async fetchJobs() {
			try {
				this.$state.isLoading = true
				const res = await apiService.fetch(`page=${this.$state.page}`)
				this.$state.jobs = res.result.list
			} catch (error) {
				this.error = error
			} finally {
				this.$state.isLoading = false
			}
		},
		incrementPage() {
			this.page += 1
            this.fetchJobs()
		},
		decrementPage() {
			this.page -= 1
            this.fetchJobs()
		},
	},
})
