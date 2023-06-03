<template>
	<div>{{ job.organization_name }} - {{ job.position }}</div>
    <p>${{ job.price_from }}</p>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useJobStore } from '../stores/job.js'

export default {
	computed: {
		...mapState(useJobStore, {
			job: 'job',
			organizationJobs: 'organizationJobs',
		}),
	},
	methods: {
		...mapActions(useJobStore, ['fetchJob', 'resetStore']),
	},
	mounted() {
		this.fetchJob(this.$route.params.slug)
	},
	unmounted() {
		this.resetStore()
	},
}
</script>

<style lang="scss" scoped></style>
