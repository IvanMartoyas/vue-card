<template>
    <main class="empty">
        <slot></slot>
    </main>
</template>
<script>
export default {
    computed: {
        error() {
            return this.$store.getters.error;
        }
    },
    watch: {
        error(fbError) {
            this.$store.commit('setError', fbError);
        }
    }
}

</script> 