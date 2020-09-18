<template>
 <div class=" row">
    <div class="card__block col-lg-3 col-md-6 col-sm-6 col-xs-12 " v-for="(item, i) in data_posts" :key="i" > 
        <div class="card__list">
            <div class="card-body"> 
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{item.body}}</p>
            </div>
        </div> 
    </div>
 </div>

</template>

<script>
  export default {
    name: 'tileList',
    data() {
      return {
     
      }
    },
    props: {
       data_posts: {},
    }
  }
</script>

<style>
   .card-body {
      margin: 20px 0
   }
</style>