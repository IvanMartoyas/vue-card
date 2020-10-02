<template>
 <div class=" row">
      <div class=" card__list mb-5">
         <div class=" col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 card-body"  v-for="(item, i) in data_posts" :key="i" >
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.content}}</p>
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
      margin: 20px 0
   }
</style>