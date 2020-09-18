
<template>
 
  <header class="header" v-bind:style="{ height: '' }" @click="send">
    <NavBar></NavBar> 
    <!-- <SliderHeader 
        :slider_data="slider_data" 
        :interval="0"
        :onlyImg="true"
        :withoutButtons="true"
        :width="width"
        :height_slider="height"
        :SlideItemSelect="true"
        ></SliderHeader>   -->
   
  </header>
</template>
<script>
    import NavBar from './component_header/NavBar.vue'
    // import SliderHeader from '@./components/blocks/slider/SliderHeader.vue'
export default {


        components: { 
            NavBar,
            // SliderHeader
        },
        data: function () { 
            return {
                heightHeader: document.documentElement.clientHeight + "px",
                height: document.documentElement.clientHeight - 56 + "px",
                width: document.documentElement.clientWidth + "px",
                slider_data: [
                    {id: 0, title: "В этом уроке разберем создание 1", description: "В этом уроке разберем создание компонента Карусели или Слайдера, причем подготовленного не только под картинки, но еще и с возможностью отображать любой другой контент.", img: "fon1.jpg"},
                    {id: 1, title: "В этом уроке разберем создание 2", description: "В этом уроке разберем создание компонента Карусели или Слайдера, причем подготовленного не только под картинки, но еще и с возможностью отображать любой другой контент.", img: "1.jpg"},
                    {id: 2, title: "В этом уроке разберем создание 3", description: "В этом уроке разберем создание компонента Карусели или Слайдера, причем подготовленного не только под картинки, но еще и с возможностью отображать любой другой контент.", img: "3.jpg"},
                    {id: 2, title: "В этом уроке разберем создание 4", description: "В этом уроке разберем создание компонента Карусели или Слайдера, причем подготовленного не только под картинки, но еще и с возможностью отображать любой другой контент.", img: "2.jpg"},
                    {id: 3, title: "В этом уроке разберем создание 5", description: "В этом уроке разберем создание компонента Карусели или Слайдера, причем подготовленного не только под картинки, но еще и с возможностью отображать любой другой контент.", img: "5.jpg"},
                ],
                name: "ivan",
                email: "fasdfds@yandex.ru",
                address: "Murom",
                gender: "man"
            }
        },
    methods: {
        send() {
            console.log("click")
            // const axios = require('axios')

                // axios({
                //     headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
                //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                //     },
                //     method: 'post',
                //     url: 'http://localhost:8080/auth',
                //     data: {
                //         firstName: 'Fred',
                //         lastName: 'Flintstone'
                //     }
                // })
                // .then(response => {
                //     this.questionData = response.body;
                //     console.log("response.body "+response.body)
                // })


        }
    },
     mounted: function() {

    },
}

</script>   
<style scoped>
    .form-inline {
        margin: 0 auto;
    }
    header {
        z-index: 100;
        position: relative;
    }
</style>
