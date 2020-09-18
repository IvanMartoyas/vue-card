
<template>

  <div id="app">

    <Header></Header>  
    <div class="bg-danger white pt-2 pb-2 " v-bind:class="{ display: message_arror == '' }"> {{message_arror}}</div>

  <component :is="layout">
    <router-view/>
  </component>

  </div>
 
</template>

<script>

  import EmptyLayout from '@/layouts/Empty-layout'
  import MainLayout from '@/layouts/Main-layout'
  import MainWhidthLayout from '@/layouts/Main-whidth-layout'
  import Header from '@/components/header/Header'
  import messages from '@/utils/messages'
  export default {
    name: 'Home',
    components: {
      Header,
      MainWhidthLayout,
      MainLayout,
      EmptyLayout
    },
    data() {
        return {
           message_arror: ''
        }
    },
    async mounted() {

      if(this.$store.getters.getUserInfo) {
        await this.$store.dispatch('fetchUser')
        console.log("logged App")
      }

    },
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      },
      error() {
        return this.$store.getters.error
      }
    },
    watch: {
        error(fbError) {
            // console.log(fbError)
            // console.log(fbError.code)
            this.message_arror = this.$error(messages[fbError.code] || 'Что то пошло не так. ');
        },
      message_arror() {
        
        //через 4 секунды убать сообщение об ошибке
        setTimeout(()=>{
          this.message_arror = ''
        },4000)
      }
    }
 
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