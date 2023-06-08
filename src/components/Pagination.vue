<template>
	<div class="paginantion">
		<button @click="prevPage()" v-show="page > 1">Предыдущая страница</button>
		<button @click="nextPage()" v-show="length === 20">
			Следущая страница
		</button>
	</div>
</template>

<script>

export default {
    props: {
        page: {
            type: Number,
            required: true
        },
        prevPage: {
            type: Function,
            required: true,
        },
        nextPage: {
            type: Function,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        }
    }
}
</script>

<style scoped>
.paginantion {
	display: flex;
	gap: 20px;
	justify-content: center;
	padding-top: 21px;
}
</style>
