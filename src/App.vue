
<template>

  <div id="app">

    <Header></Header>  
    <div class="bg-danger white pt-2 pb-2 "  v-if="error != ''"> {{error}}</div>
    <div class="bg-sucsess white pt-2 pb-2 " v-if="message != '' "> {{message}}</div>

    <component :is="layout">
      <router-view/>
    </component>

    <Footer></Footer>
  </div>
 
</template>

<script>

  import EmptyLayout from       '@/layouts/Empty-layout'
  import MainLayout from        '@/layouts/Main-layout'
  import MainWhidthLayout from  '@/layouts/Main-whidth-layout'
  import Header from            '@/components/header/Header'
  import Footer from            '@/components/footer/Footer'

  export default {
    name: 'Home',
    components: {
      Header,
      MainWhidthLayout,
      MainLayout,
      EmptyLayout,
      Footer
    },
    data() {
        return {
        }
    },
    async mounted() {

      // если пользователь не зарегистрирован то данные о нём не загружаю 
      
      if(!Object.keys(this.$store.getters.getUserInfo).length && await this.$store.dispatch("getUserId") != null) {
        // console.log(await this.$store.dispatch('fetchUser'))
      }

    },
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      },
      error() {
        return this.$store.getters.error
      },
      message() {
        return this.$store.getters.Massage
      }

    },
  }

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .display { 
    display: none;
  }
</style>