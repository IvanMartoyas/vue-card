<template>
    <div>
        <li class="slider__item" :style="' width:'+  width +'; height:'+ height_slider + ';background-image: url(' + require('../img/'+ item.img) + ')'">
            <div v-if="onlyImg" class="slider__wrapText">
                <b class="slider__title">{{item.title}}</b>
                <p class="slider__description" >{{item.description}}</p>  
            </div>
        </li>
        </div>
</template>

<script>
    export default {
        components: { 
       
        },
        props: {
            item: { 
                type: Object,
                default: () => {}
            },
            onlyImg: {
                type: Boolean
            },
            width: {
 
            },
            height_slider: {

            }
        },

    }
</script>
<style>
    .slider__item {
        padding: 50px 20px;
        text-align: center;
    }
    .slider__wrapText {
        width: 60%;
        margin: 0 auto;
        margin-top: 10%;
    }
    .slider__title {
        font-size: 280%;
        padding-bottom: 40px;
        display: block;
        line-height: 1;
        color: #fff;
        text-shadow: 0 0 12px rgb(0 0 0);
    }
    .slider__description {
        font-size: 120%;
        color: #fff;
        text-shadow: 0 0 12px rgb(0 0 0);
    }
    .slider__img {

    }
    .slider__button {
        display: flex;
    }

</style>