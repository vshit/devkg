<template>
	<section class="events">
		<div class="container">
			<Loading v-if="isLoading" />
			<slot v-else>
				<button class="event_add">Добавить мероприятие</button>
				<div class="events_list">
					<EventItem v-for="event in events" :key="event.id" :event="event" />
				</div>
                <Pagination
                    :limit='10'
					:page="page"
					:length="events.length"
					:prevPage="decrementPage"
					:nextPage="incrementPage"
				/>
			</slot>
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useEventsStore } from '../stores/events'
import EventItem from '../components/EventItem.vue'

export default {
    components: {
        EventItem
    },
	computed: {
		...mapState(useEventsStore, {
			isLoading: 'isLoading',
			error: 'error',
			events: 'events',
			page: 'page',
		}),
	},
	methods: {
		...mapActions(useEventsStore, [
			'decrementPage',
			'incrementPage',
			'fetchEvents',
		]),
	},
    mounted() {
        this.fetchEvents()
    }
}
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
}
.event_add {
    align-self: flex-end;
	margin-bottom: 20px;
}
</style>
