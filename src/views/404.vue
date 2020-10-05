<template>
  <div class="nf" :style="{height: height, backgroundImage: 'url('+ require('@/assets/img/404.jpg')+')'}">
    <div class="nf__overley green--overley">
      <div class="nf__content white">
        <h1>Страница не найдена</h1>
        <h2>Error 404</h2>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    components: { 

    },
    data() {
      return {
          height: window.innerHeight - 56 + 'px',
      }
    }
  }
</script>
<style>
  .nf {
    background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .nf__content { 
    padding-top: 150px;
  }
  .nf__overley {
    height: 100%;
  }
</style>