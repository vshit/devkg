import { defineStore } from 'pinia'
import { ReadOnlyApiService } from '../services/readonlyApi'

const apiService = new ReadOnlyApiService('pages/organizations')

export const useOrganizations = defineStore('organizations', {
	state: () => {
		return {
			isLoading: false,
            error: undefined,
            organizations: [],
            page: 1
		}
	},
    actions: {
        async fetchOrganizations() {
            try {
                
                this.isLoading = true
                const response = await apiService.fetch(`page=${this.page}`)
                this.organizations = response.result.list
            } catch (error) {
                apiService.handleErrors(error)
                this.error = error
            }finally {
                this.isLoading = false
            }
        },
        incrementPage() {
			this.page += 1
            this.fetchOrganizations()
		},
		decrementPage() {
			this.page -= 1
            this.fetchOrganizations()
		}
    }
})
