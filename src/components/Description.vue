<template>
	<div class="desc">
		<h6>{{ title }}</h6>
		<div class="content-desc"></div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	mounted() {
		document.querySelector('.content-desc').innerHTML = this.content
	},
}
</script>

<style>
.desc h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	color: var(--secondary-color);
	margin-bottom: 7px;
}

.content-desc {
	font-size: 18px;
	letter-spacing: 0.03em;
	font-weight: 400;
    border: 1px solid #e5e5e5;
	border-radius: 6px;
	padding: 25px 28px;
	max-width: 694px;
    width: 100%;
	white-space: pre-line;
}

.content-desc ul {
	list-style: disc !important;
	margin: auto !important;
	padding: auto !important;
}
</style>
