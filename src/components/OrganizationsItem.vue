<template>
	<router-link :to="`/organizations/${organization.slug}`" class="org_item">
		<div class="org_left">
			<span class="gradient" v-if="!organization.icon"></span>
			<img
				class="icon"
				v-else
				:src="`https://devkg.com/${organization.icon}`"
				alt=""
			/>
			<div class="org_info">
				<h6>Компания</h6>
				<p>{{ organization.name }}</p>
			</div>
		</div>
		<div class="org_desc">
			<div class="org_info">
				<h6>Вакансии</h6>
				<p>{{ organization.jobs_count }}</p>
			</div>
			<div class="org_info">
				<h6>Мероприятия</h6>
				<p>{{ organization.events_count }}</p>
			</div>
			<div class="org_info">
				<h6>Видео</h6>
				<p>{{ organization.meetups_count }}</p>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		organization: {
			type: Object,
			required: true,
		},
	},
	methods: {},
}
</script>

<style scoped>
.org_item {
	display: flex;
	gap: 20px;
	background: #f1f4f9;
	margin-bottom: 2px;
	padding: 21px;
	align-items: center;
	justify-content: space-between;
}

.org_item p {
	color: var(--primary-color);
	font-size: 16px;
	letter-spacing: 0.03em;
	font-weight: 700;
}

.org_item h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
	margin-bottom: 2px;
}

.org_item img {
	width: 32px;
	height: 32px;
	margin-left: 38px;
	margin-right: 10px;
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

.org_desc {
	display: flex;
	gap: 15px;
	align-items: center;
}

.org_left {
	display: flex;
	align-items: center;
	gap: 10px;
}
.icon {
	border-radius: 8px;
}
</style>
