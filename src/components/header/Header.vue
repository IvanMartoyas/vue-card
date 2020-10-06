
<template>
 
  <header class="header" v-bind:style="{ height: '' }" >
    <NavBar class="nav"></NavBar> 

  </header>
</template>
<script>
    import NavBar from './component_header/NavBar.vue'

export default {
    components: { 
        NavBar,
    },
    data: function () { 
        return {
            height: document.documentElement.clientHeight - 56 + "px",
        }
    },
    methods: {
    },
    mounted: function() {

    },
}

</script>   
<style scoped>
    .form-inline {
        margin: 0 auto;
    }
    nav {
        height: 60px;
    }
    header {
        height: 60px;
        z-index: 100;
        position: relative;
    }
</style>
