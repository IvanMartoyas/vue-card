<template>
  <div>
    <Loader v-if="loading" ></Loader>
      <section v-else class="container-fluid  bg-white article">
          <nav aria-label="breadcrumb green">
            <ol class="breadcrumb bg-white green">
              <li class="breadcrumb-item"><router-link to="/Article" class="green navbar_a">Статьи</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">Статья</li>
            </ol>
          </nav>
        <header :style="{ backgroundImage: 'url('+ data_post.file +')'}">
          <div class=" header-inner green--overley">
            <div class="row">
              <h1 class="article__title  col-lg-12 col-md-12 col-sm-12 col-xs-12 white">{{data_post.title}}</h1>
            </div>
          </div>
        </header>
        <div class="container card">
            <div class="row  article__wrapper  bg-white">
            <div class="article__autor align-left green col-lg-6 col-md-6 col-sm-6 col-xs-12 ">Автор: <b>{{data_post.autor}}</b></div>
            <div class="article__time align-right green col-lg-6 col-md-6 col-sm-6 col-xs-12 ">Дата: <b>{{data_post.date}}</b></div>
            <div class="article__content align-left pr-1  col-lg-12 col-md-12 col-sm-12 col-xs-12 ">{{data_post.content}}</div> 
          </div>
        </div>
    </section>
  </div>
</template>
<script>
  import Loader from '@/components/blocks/Loaders/Loader.vue'

  export default {
    name: 'listList',
    components: {
      Loader
    },
    data() {
      return {
          data_post: {},
          loading: true
      }
    },
    async mounted() {
      //  console.log("list select "+ this.data_posts. )

      let id = this.$route.params.id;
      
      this.data_post = await this.$store.dispatch("fatchPostsById", id);

      this.loading = false;
    },
    props: {

    }
  }
</script>
<style scoped>
  header {
    height: 500px;
    background-size: cover;
    background-position: center;
  }
  section {
    padding: 0;
    padding-bottom: 50px;
  }
  .breadcrumb {
    border-radius: 0;
    margin: 0;
  }
  h1 {
      padding: 30px 0;
      padding-top: 150px;
      font-size: 50px;
  }
  .article__wrapper {
    padding-top: 80px;
    font-size: 17px;
    border-top: 0;
    border-radius: 0 ;
  }
  .article__content {
    padding-top: 30px;
    letter-spacing: 0.4px;
    line-height: 1.6;
    min-height: 500px;
  }
  .header-inner {
    height: 100%;
  }

</style>