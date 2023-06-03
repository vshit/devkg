<template>
	<header>
		<div class="container">
			<div class="icon">
				<router-link to="/">
					<img src="../assets/images/logo.svg" alt="" />
				</router-link>
			</div>
			<nav>
				<router-link
					:to="route.route"
					v-for="route of routes"
					:key="route.route"
				>
					{{ route.name }}
				</router-link>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			routes: [
				{ name: 'Вакансии', route: '/' },
				{ name: 'Мероприятия', route: '/events' },
				{ name: 'Видео', route: '/videos' },
				{ name: 'Организации', route: '/organizations' },
				{ name: 'Сообщество', route: '/community' },
			],
		}
	},
}
</script>

<style scoped>
header {
	padding: 21px;
}
header .container {
	display: flex;
	align-items: center;
}

nav {
	display: flex;
	gap: 50px;
	margin-left: 100px;
}

nav a {
	color: var(--secondary-color);
	font-size: 16px;
	letter-spacing: 0.03em;
	font-weight: 700;
	transition: all 0.2s;
}

.router-link-active {
	color: var(--primary-color);
}

nav a:hover {
	opacity: 0.8;
}
</style>
