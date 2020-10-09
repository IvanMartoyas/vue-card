<template>
  <section class="nf" :style="{height: height, backgroundImage: 'url('+ require('@/assets/img/bg-offer.jpg')+')'}">
    <div class="nf__overley green--overley">
        <div class="container nf__content align-left">
            <div class="row white nf__offer">
                <h1 class="nf__title">Разработка сайта под ключь</h1>
                <h2>Выделю вас среди конкурентов и приведу целевой трафик на сайт </h2>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Home',
    components: {

    },
    data() {
        return {
            height: window.innerHeight - 56 + 'px',
        }
    }
}
</script>
<style scoped>
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
  .nf__offer {
      max-width: 1200px;
      margin: 0 auto;
  }
  .nf__title {
    font-size: 100px;
    line-height: 1;
    margin-bottom: 50px;
    margin-top: 3rem ;
  }
 
@media screen and (min-width: 770px) and (max-width: 1200px) {

    .nf__title {
        margin-top: 0;
    }
}
@media screen and (max-width: 770px) {

    .nf__title {
        margin-top: 0;
        font-size: 40px;
    }
    .nf__subtitle {
        font-size: 25px;
    }
    .nf__content {
        padding-top: 100px;
    }
}
</style>
