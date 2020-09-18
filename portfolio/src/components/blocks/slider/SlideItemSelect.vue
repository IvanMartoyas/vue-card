<template>
<div class="slider__indexBarWrapper">
    <div v-if="sliderData != []" class="slider__indexBar" :style="'max-width:'+ width">
            <div v-for="(r, i) in sliderData" :key="i" class="slider__selectIndex" @click="selectItem(i)" :class="{'slider__selectIndex--active': currentIndex == i}">  
            </div>
    </div>
</div>
</template>

<script>
    export default {
        components: { 
        },
        props: {
            //данные
            sliderData: {
                type: Array,
                default: () => []
            },
            currentIndex: {
                type: Number,
                default: 0
            },
            width: {
 
            },
            height_slider: {

            }
        },
        methods: {
            selectItem(i) {
                this.$emit('selectIndex', i)
                // console.log("i "+ i)
            }
        }
    }
</script>

<style>   
    .slider__selectIndex {
        width: 13px;
        height: 13px;
        box-shadow: inset 0px 0 4px 3px #6a6d6d;
        border-radius: 50%;
        background: #00000026;
        
    }
    .slider__selectIndex:hover {
        cursor: pointer;
    }
    .slider__selectIndex--active {
        border-radius: 50%;
        background: #fff;
    }
    .slider__indexBar {

    }
    .slider__indexBar {
        padding: 0 50px;
        position: absolute;
        width: 50%;
        height: 0px;
        top: 40%;
        z-index: 999;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        justify-content: space-around;
        left: 25%;
    }
    .slider__indexBarWrapper {
        min-height: 50px;
        position: absolute;
        bottom: 15px;
        width: 100%;
    }
</style>  