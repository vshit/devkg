<template>
	<section class="organizations">
		<div class="container">
			<Loading v-if="isLoading" />
			<slot v-else>
				<div class="organizations_list">
					<OrganizationsItem
						v-for="organization in organizations"
						:key="organization.id"
						:organization="organization"
					/>
				</div>
				<Pagination
					:page="page"
					:length="organizations.length"
					:prevPage="decrementPage"
					:nextPage="incrementPage"
				/>
			</slot>
		</div>
	</section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useOrganizations } from '../stores/organizations'
import OrganizationsItem from '../components/OrganizationsItem.vue'

export default {
	computed: {
		...mapState(useOrganizations, {
			organizations: 'organizations',
			page: 'page',
			isLoading: 'isLoading',
			error: 'error',
		}),
	},
	methods: {
		...mapActions(useOrganizations, [
			'decrementPage',
			'fetchOrganizations',
			'incrementPage',
		]),
	},
	mounted() {
		this.fetchOrganizations()
	},
	components: {
		OrganizationsItem,
	},
}
</script>

<style scoped></style>
