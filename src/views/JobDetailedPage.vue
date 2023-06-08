<template>
	<div class="job_page">
		<div class="container">
			<Loading v-if="isLoading" />
			<div v-else>
				<h1>{{ job.position }}</h1>
				<div class="content">
					<div class="desc">
						<router-link
							class="organization"
							:to="`${
								job.organization_state === 'confirmed'
									? `/organizations/${job.organization_slug}`
									: ''
							}`"
						>
							<span class="gradient" v-if="!job.organization_icon"></span>
							<img
								class="icon"
								v-else
								:src="`https://devkg.com/${job.organization_icon}`"
								alt=""
							/>
							<div class="organization_name">
								<h6>Компания</h6>
								<p>{{ job.organization_name }}</p>
							</div>
						</router-link>
						<div class="job_desc_item">
							<h6>Тип</h6>
							<p>{{ getWorkType() }}</p>
						</div>
						<div class="job_desc_item">
							<h6>Оклад</h6>
							<p>{{ getSalary() }}</p>
						</div>
						<Description title="Описание вакансии" :content="job.text" />
						<ContactItem :job="job" />
					</div>

					<div class="offers">
						<VacancyOffers
                            v-if='organizationJobs.length > 0'
							title="Другие вакансии компании"
							:jobs="organizationJobs"
						/>
						<VacancyOffers title="Похожие вакансии" :jobs="relatedJobs" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useJobStore } from '../stores/job.js'
import { getWorkType } from '../utils/getWorkType'
import { getSalary } from '../utils/getSalary'
import Description from '../components/Description.vue'
import ContactItem from '../components/ContactItem.vue'
import VacancyOffers from '../components/VacancyOffers.vue'

export default {
	components: {
		Description,
		ContactItem,
		VacancyOffers,
	},
	computed: {
		...mapState(useJobStore, {
			job: 'job',
			organizationJobs: 'organizationJobs',
			relatedJobs: 'relatedJobs',
			isLoading: 'isLoading',
		}),
	},
	methods: {
		...mapActions(useJobStore, ['fetchJob', 'resetStore']),
		getWorkType() {
			return getWorkType(this.job.type)
		},
		getSalary() {
			return getSalary(this.job)
		},
	},
	mounted() {
		this.fetchJob(this.$route.params.slug)
	},
	watch: {
		$route() {
			this.fetchJob(this.$route.params.slug)
		},
	},
	unmounted() {
		this.resetStore()
	},
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.organization {
	display: flex;
	gap: 20px;
	background: #f1f4f9;
	margin-bottom: 20px;
	padding: 10px;
	align-items: center;
	margin-top: 25px;
}

.organization_name p {
	color: var(--primary-color);
	font-size: 16px;
	letter-spacing: 0.03em;
	font-weight: 700;
}

.organization_name h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
	margin-bottom: 2px;
}

.organization img {
	width: 32px;
	height: 32px;
	margin-left: 38px;
	margin-right: 10px;
}

.organization_name {
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

h1 {
	margin-top: 21px;
}

.job_desc_item {
	letter-spacing: 0.03em;
	text-decoration: none;
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 20px;
	word-break: break-word;
}

.job_desc_item h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
	margin-bottom: 2px;
}

.desc {
	flex: 1;
}
.content {
	display: flex;
	gap: 40px;
}
.offers {
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 40px;
}
</style>
