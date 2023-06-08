<template>
	<div>
		<h4>{{ title }}:</h4>
		<router-link
			:to="`/job/${job.slug}`"
			class="jobs"
			v-for="job in jobs"
			:key="job.id"
		>
			<h6>{{ job.position }}</h6>
			<p>{{ getSalary(job) }} - {{ getWorkType(job.type) }}</p>
		</router-link>
	</div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { getSalary } from '../utils/getSalary'
import { getWorkType } from '../utils/getWorkType'

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		jobs: {
			type: Array,
			required: true,
		},
	},
	components: { RouterLink },
	methods: {
		getSalary(job) {
			return getSalary(job)
		},
		getWorkType(type) {
			return getWorkType(type)
		},
	},
}
</script>

<style scoped>
h4 {
	color: var(--primary-color);
	font-size: 18px;
	margin-bottom: 10px;
}

.jobs {
	padding: 10px 0;
	border-bottom: 1px dashed #e5e5e5;
    margin-bottom: 10px;
    display: block;
}
.jobs:last-child {
	border-bottom: none;
}

.jobs h6 {
	color: var(--link-color);
	font-size: 18px;
	font-weight: 400;
	letter-spacing: 0.03em;
	line-height: normal;
}
</style>
