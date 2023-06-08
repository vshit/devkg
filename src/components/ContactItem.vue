<template>
	<div class="contacts">
		<div v-if="job.telegram" class="contact-item">
			<h6>Telegram</h6>
			<a
				target="_blank"
				:href="`https://t.me/${job.telegram[0] === '@' ? job.telegram.slice(1) : job.telegram}`"
			>
				{{ job.telegram[0] === '@' ? '' : '@' }}{{ job.telegram }}
			</a>
		</div>
		<div v-if="job.email" class="contact-item">
			<h6>Email</h6>
			<a target="_blank" :href="`mailto:${job.email}`"> {{ job.email }} </a>
		</div>
		<div v-if="job.phone" class="contact-item">
			<h6>Телефон</h6>
			<a target="_blank" :href="`tel:${job.phone}`"> {{ job.phone }} </a>
		</div>
		<div v-if="job.skype" class="contact-item">
			<h6>Skype</h6>
			<a target="_blank" :href="`skype:${job.skype}`"> {{ job.skype }} </a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		job: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.contacts {
	margin-top: 20px;
}
.contact-item {
	letter-spacing: 0.03em;
	text-decoration: none;
	font-weight: 700;
	font-size: 18px;
	margin-bottom: 20px;
	word-break: break-word;
}
.contact-item a {
	color: #0062c4;
}
</style>
