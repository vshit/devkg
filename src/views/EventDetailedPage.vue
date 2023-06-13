<template>
    <div>
        
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useEventStore } from '../stores/event'

    export default {
        computed: {
            ...mapState(useEventStore, {
                isLoading: 'isLoading',
                error: 'error',
                event: 'event'
            })
        },
        methods: {
            ...mapActions(useEventStore,['fetchEvent'])
        },
        mounted() {
            this.fetchEvent(this.$route.params.slug)
        }
    }
</script>

<style scoped>

</style>