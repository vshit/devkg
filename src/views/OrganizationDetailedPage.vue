<template>
	<div class="org_page">
		<div class="container">
			<Loading v-if="isLoading" />
			<slot v-else>
				<div class="org_name">
					<span class="gradient" v-if="!organization.icon"></span>
					<img
						class="icon"
						v-else
						:src="`https://devkg.com/${organization.icon}`"
						alt=""
					/>
					<h1>{{ organization.name }}</h1>
				</div>
				<div class="org_info">
					<h6>Веб-сайт</h6>
					<p>
						<a target="_blank" :href="`https://${organization.website}`">
							{{ organization.website }}
						</a>
					</p>
				</div>
				<Description title="Описание" :content="organization.description" />
				<div v-if="jobs.length > 0" class="vacancies">
					<h2>Вакансии</h2>
					<div class="vacancies_list">
						<JobsItem :job="job" v-for="job in jobs" :key="job.id" />
					</div>
				</div>
			</slot>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useOrganizationStore } from '../stores/organization'
import Description from '../components/Description.vue'
import JobsItem from '../components/JobsItem.vue'

export default {
	computed: {
		...mapState(useOrganizationStore, {
			isLoading: 'isLoading',
			error: 'error',
			organization: 'organization',
			events: 'events',
			meetups: 'meetups',
			jobs: 'jobs',
		}),
	},
	methods: {
		...mapActions(useOrganizationStore, ['fetchOrganization']),
	},
	mounted() {
		this.fetchOrganization(this.$route.params.slug)
	},
	components: {
		Description,
		JobsItem,
	},
}
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.org_info p a {
	color: var(--link-color);
	font-size: 16px;
	letter-spacing: 0.03em;
	font-weight: 700;
}

.org_info h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
	margin-bottom: 2px;
}

.org_name {
	display: flex;
	align-items: center;
	gap: 15px;
}
.org_name img {
	width: 48px;
	height: 48px;
}

.gradient {
	border-radius: 8px;
	margin-right: 10px;
	display: block;
	width: 48px;
	height: 48px;
	background: linear-gradient(
		147.89deg,
		rgb(189, 255, 0) -31.07%,
		rgba(0, 99, 46, 0.7) 128.49%
	);
}

.icon {
	border-radius: 8px;
}

.vacancies {
	display: flex;
	flex-direction: column;
	gap: 35px;
}

h2 {
	font-size: 24px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
}
</style>
