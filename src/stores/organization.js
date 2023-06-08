import { defineStore } from 'pinia'
import { ReadOnlyApiService } from '../services/readonlyApi'

const apiService = new ReadOnlyApiService('pages/organization')

export const useOrganizationStore = defineStore('organization', {
	state: () => {
		return {
			isLoading: false,
			error: undefined,
			organization: {},
            events: [],
            meetups: [],
            jobs: []
		}
	},
	actions: {
		async fetchOrganization(slug) {
			try {
				if (!slug) return
				this.isLoading = true
                const response = await apiService.getBySlug(slug)
                this.organization = response.result.organization
                this.events = response.result.events
                this.meetups = response.result.meetups
                this.jobs = response.result.jobs
			} catch (error) {
                apiService.handleErrors(error)
                this.error = error
            } finally {
                this.isLoading = false
            }
		},
	},
})
