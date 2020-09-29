<template>
  <div>
    <Loader v-if="loading" ></Loader>
    <div v-else-if="!posts.length" class="mt-4"> <b>У вас нет созданных постов. </b>  </div> 
    <form  v-else  class="card form_search_post">

        <div class="form-group">
          <label for="exampleFormControlSelect2">Выберите пост для редактирования</label>
          <b-form-select  v-model="selected" class="form-control" id="exampleFormControlSelect2">
             <b-form-select-option 
              v-for="post of posts"
              :key="post.id"
              :value="post.id"

            >
            {{post.title}}
            </b-form-select-option>
          </b-form-select >
        </div>
    </form>

    <form v-if="select_post" @submit.prevent="submitUpdatePost"  method="post" enctype="multipart/form-data" class="card form_search_post mt-3">
        <div class="form-group">
            <label for="title1">Заголовок</label>
            <input type="text" class="form-control" id="title1" v-model.lazy="$v.title.$model" name="title" >

            <small  class="btn form-text bg-danger text-light" v-if="$v.title.$dirty && !$v.title.required">Введите заголовок.</small>
        </div>
        <div class="form-group">
            <label for="quote1">Цитата</label>
            <input type="text" class="form-control" v-model.lazy="$v.quote.$model" name="quote" id="quote1"/>

            <small  class="btn form-text bg-danger text-light" v-if="$v.quote.$dirty && !$v.quote.required">Укажите цитату цитату.</small>
            <small  class="btn form-text  bg-danger text-light" v-else-if="$v.quote.$dirty && !$v.quote.minLength">Цитата должна состоять минимум из 20 символов.</small>
        </div>
        <div class="form-group">
            <label for="Kontent1">Контент</label>
            <textarea type="text" class="form-control" v-model.lazy="$v.content.$model" name="content" id="Kontent1">
            </textarea>

            <small  class="btn form-text bg-danger text-light" v-if="$v.content.$dirty && !$v.content.required">Введите контент поста.</small>
        </div>

        <div class="form-group">
            <label for="File1">Выберите фото </label>
            <input type="file" class="form-control-file"  name="file" id="File1"/>
            
            <small  class="btn form-text bg-danger text-light" v-if="$v.file.$dirty && !$v.file.required">Введите изображение.</small>
        </div>
        <button type="submit" class="btn botton--green">Сохранить изменения</button>
    </form>

  </div>
</template>


<script>
  import { email, required, minLength, numeric } from 'vuelidate/lib/validators'
  // import axios from 'axios'
  // import router from '@/router/index'
  // import _ from "lodash"
  import Loader from '@/components/blocks/Loaders/Loader.vue'
  export default {
      
    components: {
        Loader
    },
    data() {
      return {
        title: '',
        quote: '',
        content: '',
        file: '',
        select_post: false,
        loading: true,
        posts: [],
        selected: ''
      }
    },
    validations: {
        find_post_id: {
            required
        },     
        title: {
          required
        },
        quote: {
          required,  
          minLength: minLength(20)       
        },
        content: {
          required
        },
        file: {
          //  required, 
        }
    },
    async mounted() {
      
      this.posts = await this.$store.dispatch('fatchPosts')

      this.loading = false

    },
    methods: {
        async submitUpdatePost() {
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }            
        }
    },
    watch: {
       selected() {
         this.select_post = true
       }
    }
  }
</script>

<style>
   .form_search_post {
          padding: 30px 20px;
   }
</style>