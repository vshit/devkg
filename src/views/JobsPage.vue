<template>
	<section class="jobs">
		<div class="container">
			<Loading v-if="isLoading" />
			<slot v-else>
				<button class="job_add">Добавить вакансию</button>
				<div class="jobs_list">
					<JobsItem v-for="job in jobs" :key="job.id" :job="job" />
				</div>
				<div class="paginantion">
					<button @click="prevPage()" v-show="page > 1">
						Предыдущая страница
					</button>
					<button @click="nextPage()" v-show="jobs.length === 20">
						Следущая страница
					</button>
				</div>
			</slot>
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useJobsStore } from '../stores/jobs.js'
import JobsItem from '../components/JobsItem.vue'
import Loading from '../components/Loading.vue'

export default {
	methods: {
		...mapActions(useJobsStore, [
			'fetchJobs',
			'incrementPage',
			'decrementPage',
		]),
		nextPage() {
			this.incrementPage()
			this.fetchJobs()
		},
		prevPage() {
			this.decrementPage()
			this.fetchJobs()
		},
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
		Loading,
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

.paginantion {
	display: flex;
	gap: 20px;
	justify-content: center;
	padding-top: 21px;
}
</style>
