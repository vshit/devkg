<template>
	<router-link class="event" :to="`/events/${event.slug}`">
		<div class="cover">
			<img :src="`https://devkg.com/${event.cover}`" alt="" />
		</div>
		<p class="head">{{ getFormattedDate() }} {{ getFormattedTime() }}</p>
		<div class="content">
			<h5>{{ event.name }}</h5>
			<div class="info">
				<div class="info_item">
					<h6>Организатор</h6>
					<p>{{ event.organization_name }}</p>
				</div>
				<div class="info_item">
					<h6>Локация</h6>
					<p>{{ getLocation() }}</p>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script>
import { getFormattedDate, getFormattedTime } from '../utils/formatDate'

export default {
	props: {
		event: {
			type: Object,
			required: true,
		},
	},
	methods: {
		getFormattedDate() {
			return getFormattedDate(this.event.date.toString())
		},
		getFormattedTime() {
			return getFormattedTime(this.event.date.toString())
		},
		getLocation() {
			if (this.event.event_type === 'online') {
				return 'Онлайн'
			}

			return this.event.location
		},
	},
}
</script>

<style scoped>
.event {
	display: flex;
	height: 395px;
	position: relative;
	margin-bottom: 20px;
	color: #fff;
	justify-content: space-between;
	flex-direction: column;
}
.cover {
	position: absolute;
	z-index: -1;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	overflow: hidden;
	background: linear-gradient(120deg, #222, #4a4a4a 35%, #000);
}
.cover img {
	width: 100%;
	height: 100%;
	opacity: 0.5;
	filter: blur(10px);
	transform: scale(1.1);
	object-fit: cover;
	object-position: top;
}
.head {
	padding: 29px 37px;
	font-weight: 300;
	font-style: italic;
}
.content {
	display: flex;
	width: 100%;
	align-items: flex-end;
	flex-wrap: wrap;
	padding: 29px 37px;
}
.content h5 {
	font-size: 34px;
	letter-spacing: 0.03em;
	padding-right: 80px;
	flex: 1 1 100%;
	margin-bottom: 20px;
}
.info {
	display: flex;
	width: 100%;
	align-items: flex-end;
	flex-wrap: wrap;
}
.info_item {
	min-width: 143px;
	max-width: 281px;
	margin-right: 20px;
	min-height: 64px;
	line-height: normal;
	font-size: 18px;
	letter-spacing: 0.03em;
}
.info_item h6 {
	display: block;
	font-size: 14px;
	letter-spacing: 0.03em;
	font-weight: 300;
	margin-top: 5px;
	margin-bottom: 2px;
}
</style>
