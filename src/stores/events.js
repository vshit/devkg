import { defineStore } from 'pinia';
import { ReadOnlyApiService } from '../services/readonlyApi';

const apiService = new ReadOnlyApiService('pages/events')

export const useEventsStore = defineStore('eventsStore',{
    state: ()=> {
        return {
            isLoading: false,
            error: undefined,
            events: [],
            page: 1
        }
    },
    actions: {
       async fetchEvents() {
            try {
                this.isLoading = true
                const res = await apiService.fetch(`page=${this.page}`)
                this.events = res.result.list
            } catch (error) {
                apiService.handleErrors(error)
                this.error = error
            } finally {
                this.isLoading = false
            }
        },
        incrementPage() {
			this.page += 1
            this.fetchEvents()
		},
		decrementPage() {
			this.page -= 1
            this.fetchEvents()
		},
    }
})
