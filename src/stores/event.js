import { defineStore } from 'pinia';
import { ReadOnlyApiService } from '../services/readonlyApi';

const apiService = new ReadOnlyApiService('pages/event')

export const useEventStore = defineStore('eventStore', {
    state: () => {
        return {
            isLoading: false,
            error: undefined,
            event: {}
        }
    },
    actions: {
        async fetchEvent(slug) {
            try {
                this.isLoading = true
                const res = await apiService.getBySlug(slug)
                this.event = res.result
            } catch (error) {
                apiService.handleErrors(error)
                this.error = error
            } finally {
                this.isLoading = false
            }
        }
    }
})