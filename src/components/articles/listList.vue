<template>
 <div class=" row">
      <div class="card__list mb-5">
         <div 
            class="card col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 card-body"  
            v-for="(post, i) in data_posts" 
            :key="i" 
         >
            <h5 class="card-title align-left">{{post.title}}</h5>

            <div class="card__image" :style="{ backgroundImage: 'url('+ post.file +')'}">
           
            </div>
            <p class="card-text align-left">{{post.quote}}</p>
            <div class="mt-2 mb-2">Дата: {{post.date }}</div>
            <button
               class="btn bg-sucsess white"
               @click=" $router.push('/articles/post/'+post.id)"
               v-b-tooltip.hover 
               title="Нажмите чтобы просмотреть подробнее..."
            >Подробнее</button>
         </div>
      </div>
 </div>
</template>

<script>
  export default {
    name: 'listList',
    data() {
      return {
     
      }
    },
    mounted() {
      //  console.log("list select "+ this.data_posts. )
    },
    props: {
       data_posts: {},
    }
  }
</script>

<style>
   .card-body {
      align-items: flex-start;
      border-radius: 0;
      margin: 40px 0;
   }
   .card__image {
      height: 450px;
      background-size: cover;
      background-position: center;
      width: 100%;
      margin: 10px 0;
   }
   .card-title {
      margin-bottom: 0.75rem;
      font-weight: 800;
      font-size: 25px;
      line-height: 1.5;
      padding: 10px 0;
    }
    .card-text {
           margin: 30px 0;
    }
</style>