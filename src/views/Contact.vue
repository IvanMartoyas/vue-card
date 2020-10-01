<template>
    <section class="contact">
        <div class="container-fluid">
            <div class="row contact_wrap">
                <div 
                    class="left_space col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" 
                    :style="{height: height, backgroundImage: 'url('+ require('@/assets/img/contact1.jpg')+')'}"

                >

                </div>
                <div class="right_space col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h1>Мои контакты</h1>  
                    <ul class="align-left contact_ul">
                        <li class="contact_li"><b>Телефон</b> +7 996 192 19 25</li>
                        <li class="contact_li"><b>Почта</b> ivanmart2017@yandex.ru</li>
                        
                    </ul>
                </div>
             
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    components: { 

    },
    data() {
      return {
          height: window.innerHeight - 56 + 'px'
      }
    },
    methods: {
// {{//require('@/assets/img/contact1.jpg') }}
    }
  }
</script>

<style >
    .contact_ul {
        padding: 0;
        width: 80%;
        margin: 0 auto;
        list-style: none;
        margin-top: 30px;
    }
    .contact_li {
        padding: 5px 0;
    }
    .contact_li b {
        display: block;
        margin-top: 20px;
    }
    .left_space {
        
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .right_space {
        padding-top: 15%;
    }
    @media screen  and (min-width: 769px) and (max-width: 1200px){
        .right_space {
        padding-top: 25%;
    }
    }
    @media screen and (max-width: 768px) {
        .left_space {
            z-index: 1
        }
        .right_space {
            position: absolute;
            z-index: 2;
            background: #0000005c;
            color: #fff;
            text-align: center;
            width: 100%;
            height: 100%;
        }
        .contact_wrap {
            position: relative;
        }
        .contact_li b {
            color: #fff
        }
    }
</style>