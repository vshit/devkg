<template>
	<div class="page">
		<div class="container" v-if="isLoading">
			<Loading v-if="isLoading" />
		</div>
		<slot v-else>
			<div class="hero">
				<div class="hero-bg">
					<img
						:src="`https://devkg.com${event.cover}`"
						class="hero-img"
						alt=""
					/>
				</div>
				<div class="container">
					<div class="left">
						<h1>{{ event.name }}</h1>
						<div class="desc">
							<div class="desc_item">
								<h6>Когда</h6>
								<p>
									{{ getFormattedDate() }} <br />
									{{ getFormattedTime() }}
								</p>
							</div>
							<div class="desc_item">
								<h6>Организатор</h6>
								<p>{{ event.organization_name }}</p>
							</div>
							<div class="desc_item">
								<h6>Локация</h6>
								<p>{{ getLocation() }}</p>
							</div>
						</div>
					</div>
					<img class="right" :src="event.share_cover" alt="" />
				</div>
			</div>
			<div class="container">
				<div class="content_buttons">
					<a :href="event.website" target="_blank">
						<button>Веб-сайт</button>
					</a>
					<button disabled class="disabled">Регистрация</button>
				</div>
				<div id="content"></div>
			</div>
		</slot>
	</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useEventStore } from '../stores/event'
import { getFormattedDate, getFormattedTime } from '../utils/formatDate'

export default {
	computed: {
		...mapState(useEventStore, {
			isLoading: 'isLoading',
			error: 'error',
			event: 'event',
		}),
	},
	methods: {
		getFormattedDate() {
			if (!this.event.date) return
			return getFormattedDate(this.event.date.toString())
		},
		getFormattedTime() {
			if (!this.event.date) return
			return getFormattedTime(this.event.date.toString())
		},
		getLocation() {
			if (this.event.event_type === 'online') {
				return 'Онлайн'
			}

			return this.event.location
		},

		...mapActions(useEventStore, ['fetchEvent']),
	},
	async mounted() {
		await this.fetchEvent(this.$route.params.slug)
		document.querySelector('#content').innerHTML = this.event.description
	},
}
</script>

<style scoped>
.hero .container {
	display: flex;
	justify-content: space-between;
}
.hero {
	position: relative;
	min-height: 396px;
	color: var(--light-color);
	display: flex;
	align-items: center;
}
.hero-bg {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(120deg, #222, #4a4a4a 35%, #000);
	overflow: hidden;
	z-index: -1;
}
.hero-img {
	opacity: 0.5;
	filter: blur(10px);
	width: 100%;
}

.left {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 25px 0;
}

.left h1 {
	font-size: 40px;
	letter-spacing: 0.03em;
}
.hero .desc {
	display: flex;
	gap: 20px;
	flex-direction: row;
}
.right {
	max-height: 290px;
	max-width: 100%;
	box-shadow: 0 0 20px rgba(84, 84, 84, 0.31);
	justify-self: center;
}
.desc_item h6 {
	font-size: 14px;
	letter-spacing: 0.03em;
	font-weight: 300;
	margin-bottom: 2px;
}
.desc_item p {
	font-size: 18px;
	letter-spacing: 0.03em;
	font-weight: 700;
}
.content_buttons {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 21px 0;
}
.disabled {
	cursor: default;
	background: #e5e5e5;
	color: #191f5d;
}
</style>
