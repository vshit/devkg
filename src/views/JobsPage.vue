<template>
	<section class="jobs">
		<div class="container">
			<Loading v-if="isLoading" />
			<slot v-else>
				<button class="job_add">Добавить вакансию</button>
				<div class="jobs_list">
					<JobsItem v-for="job in jobs" :key="job.id" :job="job" />
				</div>
                <Pagination
                    :limit='20'
					:page="page"
					:length="jobs.length"
					:prevPage="decrementPage"
					:nextPage="incrementPage"
				/>
			</slot>
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useJobsStore } from '../stores/jobs.js'
import JobsItem from '../components/JobsItem.vue'

export default {
	methods: {
		...mapActions(useJobsStore, [
			'fetchJobs',
			'incrementPage',
			'decrementPage',
		]),
	},
	computed: {
		...mapState(useJobsStore, {
			jobs: 'jobs',
			error: 'error',
			isLoading: 'isLoading',
			page: 'page',
		}),
	},
	mounted() {
		if (!this.jobs.length) {
			this.fetchJobs(this.page)
		}
	},
	components: {
		JobsItem,
	},
}
</script>

<style scoped>
.jobs {
	padding: 21px;
}

.container {
	display: flex;
	flex-direction: column;
}
.job_add {
	align-self: flex-end;
	margin-bottom: 20px;
}


</style>
