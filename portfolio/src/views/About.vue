<template>
  <div>
    <section class="about" :style="{height: height, backgroundImage: 'url('+ require('@/assets/img/home-office-336378_1920.jpg')+')'}">
      <div class="green--overley" :style="{height: height}">
        <div class="about__wrapper">
            <div class="about__content white">
              <h1>Обо мне</h1>
              <br>  
              <ul>
                <li>
                    Начал программировать на JavaScript в 19 лет.
                </li>
                <li>
                    Создавал шаблоны на cms Word Press.
                </li>
                <li>
                    Последние 3 года практекуюсь Frontend разрабодке.
                </li>
              </ul>
            </div>
            <div class="about__mi " :style="{height: height, backgroundImage: 'url('+ require('@/assets/img/i.png')+')'}">
            </div>
          </div>
        </div>
    </section>


    <section >
      <h2 class="mt-5 mb-5">Мои навыки</h2>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        fade
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          v-for="(slider, i) in data_slider"
          :key="i"
          :caption="slider.title"
          :text="slider.body"
          :img-src="slider.img"
        ></b-carousel-slide>
  
        <!-- Text slides with image -->
      </b-carousel>
    </section>
    

  </div>
</template>
<script>
  export default {
    components: { 

    },
    data() {
      return {
          height: window.innerHeight - 56 + 'px',
          // img: {
          //   img1: 
          // }
          data_slider: {
            slide1: {
              img: require('@/assets/img/html&css.jpg'),
              title: "Html 5 и CSS 3",
              body: "Html 5 используется для создания разметки страниц, а CSS приданию определённой стелистике сайту."
            },
            slide2: {
              img:  require('@/assets/img/bootstrap.jpg'),
              title: "Framework bootstrap",
              body: "Этот фреймворк позволяет ускорить вёрстку сайта, а также придать адаптивность его страницам."
            },
            slide3: {
              img: require('@/assets/img/jQuery-debouncing-events.jpg'),
              title: "Библиотека jQuery",
              body: "Данная библиотека ускоряет написание JS скриптов, работу с ДОМ элементами , a также она в себе содержит технологию AJAX которая позволяет асинхронно (без перезаргузки страници) подгружать данные при взаимодействии пользователя с интерфейсом сайта."
            },
            slide4: {
              img:require('@/assets/img/JavaScript.jpg'),
              title: "JavaScript",
              body: "Это интерпритируемый браузером язык исполльзуемый для написания скриптов, и обрабодки пользовательских действий на сайте. "
            },
            slide5: {
              img:  require('@/assets/img/Vue-js-programming-1589827.jpg'),
              title: "Vue Js",
              body: "Это фреймворк для создания пользовательских интерфейсов, c SPA архитектурой."
            },
            slide6: {
              img:  require('@/assets/img/php.png'),
              title: "PHP",
              body: "Это серверный язык, используется для создания динамических веб-сайтов."
            },
            slide7: {
              img:  require('@/assets/img/readBeanPhp.jpg'),
              title: "readBean PHP",
              body: "Это мощная ORM для PHP, которая значительно упрощает работу с базами данных и ускоряет скорость разрабодки."
            },
            slide8: {
              img:  require('@/assets/img/photoshop.jpg'),
              title: "Adobe Photoshop",
              body: ""
            }
          },
           slide: 0,
        sliding: null
      }
    },
    methods: {
// {{//require('@/assets/img/contact1.jpg') }}

      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    
    }
  }
</script>
<style  lang="sass" >
  .about
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background: fixed;
    &__wrapper
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-between;
      font-size: 19px;
      div
        padding: 0 10px;
    &__content 
      text-align: left;
      line-height: 2;
      letter-spacing: 0.3px;
      width: 50%;
    &__mi
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 750px!important;
      width: 500px;
      position: absolute;
      bottom: 0px;
      right: 20%;
      z-index: 1;
  .carousel-caption
    p
      color: #fff

  @media screen and (max-width: 930px) 
    .carousel-caption
      background: #000000e8;
      p
        display: none
    .about__content
      padding: 20px 10px;
      background: #224c52b3;
      z-index: 3;
      width: 100%!important;
      padding: 50px 10px!important;
      margin: 0 10px;
    .about__mi
          display: none
      
  @media screen and (max-width: 1200px) and (min-width: 930px) 
    .about__mi
      right: 5%;


</style>