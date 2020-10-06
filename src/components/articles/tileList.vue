<template>
 <div class=" row">
    <div 
      class="col-lg-4 col-md-6 col-sm-12 col-xs-12 cardTile"
      v-for="(post, i) in data_posts" 
      :key="i" 
    >
      <div class="card cardTile__block align-left " > 
         <!-- <div class="card-img-top card__image" :style="{ backgroundImage: 'url('+ post.file +')'}" ></div>
          -->
          <img class="card-img-top" :src="post.file" :alt="post.title">
         <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.quote}}</p>
            <button
                  class="btn bg-sucsess white"
                  @click=" $router.push('/articles/post/'+post.id)"
                  v-b-tooltip.hover 
                  title="Нажмите чтобы просмотреть подробнее..."
            >Подробнее</button>
         </div>
      </div>
   </div>
 </div>

</template>

<script>
  export default {
    name: 'TileList',
    data() {
      return {
     
      }
    },
    props: {
       data_posts: {},
    }
  }
</script>

<style >
   .cardTile {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
   }
   .card-body {
      margin: 20px 0
   }
   .card__image {
      height: 200px;
      background-size: cover;
      background-position: center;
      width: 100%;
   }
   .cardTile__title {
          padding: 15px 0;
   }
   .cardTile__block {
      margin: 40px 0;
   }
   .card__list  {
      
    padding: 0 10px;
   }
</style>