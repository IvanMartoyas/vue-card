<template>
    <ul class="slider" :style="' width:'+  width +'; height:'+ height_slider">
       
       <SlideItemSelect
        v-if="SlideItemSelect"
        :sliderData="slider_data"
        :currentIndex = "current_index" 
        :width="width"
        :height_slider="height_slider"
        @selectIndex="selectIndex"
       ></SlideItemSelect>

        <div v-if="withoutButtons" class="btn__bar">
            <div class="slider__button" @click="back_slide">&#60;</div>
            <div class="slider__button" @click="go_slide"  >&#62;</div>
        </div>
        
        <div class="slider__wrapper" :style="'margin-left: -'+ 100 * current_index +'%; max-width:'+  width +'; height:'+ height_slider">    
            <SliderItem  
                v-for="item in slider_data" 
                :item="item" 
                :key="item.id"
                :onlyImg="onlyImg"
                :width="width"
                :height_slider="height_slider"
                ></SliderItem>
        </div>
    </ul>
</template>



<script>
    import SliderItem from './SliderItem.vue'
    import SlideItemSelect from './SlideItemSelect.vue'

    export default {
        
        components: { 
            SliderItem,
            SlideItemSelect
        },
        props: {
            //данные
            slider_data: {
                type: Array,
                default: () => []
            },
            //только изображение показывать
            onlyImg: {
                type: Boolean,
                default: false
            },
            SlideItemSelect: {
                type: Boolean,
                default: false
            },
            //интервал переключения
            interval: {
                type: Number,
                default: 0
            },
            withoutButtons: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '600px'
            },
            height_slider: {
                default: '500px'
            }
        },
        data: function () { 
            return {
                current_index: 0,
                height: document.documentElement.clientHeight+ "px",
                no_profile_url: './img/fon1.jpg'
            }
        },
        methods: {
            go_slide() {
                if(this.current_index >= this.slider_data.length-1) {
                    this.current_index = 0
                }
                else {
                    this.current_index++
                }
                console.log(this.current_index)
            },
            back_slide() {
                if(this.current_index > 0){
                    this.current_index--
                    console.log(this.current_index)
                }
            },
            selectIndex(newVal) {
                this.current_index = newVal
                // console.log("newVal "+newVal)
             }
        },
        mounted() {
            if(this.interval > 0) {
                let vm = this;
                setInterval( function () {
                    vm.go_slide()
                }, vm.interval)
            }
        }

    }

</script>

<style>
    .slider {
        overflow: hidden;
        text-align: left;
        margin: 0 auto;
        padding: 0;
        position: relative;
    }   
    .slider:hover  .btn__bar {
        display: flex;
        transition: all 2s;
    } 
    .slider__wrapper {
        display: flex;
        transition: all ease 1s
    }
    .slider__item {
        list-style: none;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .btn__bar {
        position: absolute;
        top: 50%;
        padding: 0 2%;
        justify-content: space-between;
        display: flex;
        width: 100%;
        display: none;
    }
    .slider__button {
        cursor: pointer;
        padding: 5px 20px;
        background: #00000069;
        border: 1px solid #272727;
        color: #fff;
    }
</style>

