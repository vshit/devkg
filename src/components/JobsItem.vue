<template>
	<router-link
		class="job_item"
		:class="{
			unactive: job.is_archived,
		}"
		:to="`/job/${job.slug}`"
	>
		<span class="gradient" v-if="!job.organization_icon"></span>
		<img class='icon' v-else :src="`https://devkg.com/${job.organization_icon}`" alt="" />
		<div class="job_info">
			<h6>Компания</h6>
			<p>{{ job.organization_name }}</p>
		</div>
		<div class="job_info">
			<h6>Должность</h6>
			<p>{{ job.position }}</p>
		</div>
		<div class="job_info">
			<h6>Оклад</h6>
			<p>
				{{ getSalary(job) }}
			</p>
		</div>
		<div class="job_info">
			<h6>Тип</h6>
			<p>{{ getWorkType(job.type) }}</p>
		</div>
	</router-link>
</template>

<script>
import { getWorkType } from '../utils/getWorkType'
import { getSalary } from '../utils/getSalary'

export default {
	props: {
		job: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getWorkType(type) {
			return getWorkType(type)
		},
		getSalary(job) {
			return getSalary(job)
		},
	},
}
</script>

<style scoped>
.unactive {
	opacity: 0.6;
}
.job_item {
	display: flex;
	gap: 20px;
	background: #f1f4f9;
	margin-bottom: 2px;
	padding: 21px;
	align-items: center;
}

.job_item p {
	color: var(--primary-color);
	font-size: 16px;
	letter-spacing: 0.03em;
	font-weight: 700;
}

.job_item h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
	margin-bottom: 2px;
}

.job_item img {
	width: 32px;
	height: 32px;
	margin-left: 38px;
	margin-right: 10px;
}

.job_info {
	width: 255px;
}

.gradient {
    border-radius: 8px;
	margin-left: 38px;
	margin-right: 10px;
	display: block;
	width: 32px;
	height: 32px;
	background: linear-gradient(
		147.89deg,
		rgb(189, 255, 0) -31.07%,
		rgba(0, 99, 46, 0.7) 128.49%
	);
}

.icon {
    border-radius: 8px;
}
</style>
