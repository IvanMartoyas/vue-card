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

    <form  @submit.prevent="submitUpdatePost"  method="post" enctype="multipart/form-data" class="card form_search_post mt-3">
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
            <input  class="form-control-file"  v-model.lazy="$v.file.$model" name="file" id="File1"/>
            
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
        autor: '',
        select_post: false,
        loading: true,
        posts: [],
        selected: null,

      }
    },
    validations: {    
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
           required, 
        }
    },
    async mounted() {
      
      this.posts = await this.$store.dispatch('fatchPosts')
      // console.log("this.posts "+this.posts)
      const {id, title, quote, content, file, autor} = this.posts[0];
      this.selected = id
      this.title = title
      this.quote = quote
      this.content = content
      this.file = file
      this.autor = autor
      this.loading = false

    },
    created() {

    },
    methods: {
        async submitUpdatePost() {
          // console.log("click")
          // не проходит проверка 
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            } 
            try {
              
                await this.$store.dispatch('updatePost', {
                  id: this.selected, 
                  title: this.title, 
                  quote: this.quote, 
                  content: this.content, 
                  file: this.file, 
                  autor: this.autor
                })
                this.$store.dispatch("Massage","Пост успешно обновлён. ");
                this.title = '';
                this.quote = '';
                this.content = '';
                this.file = '';
                this.$v.$reset()
                
                this.posts = await this.$store.dispatch('fatchPosts')
                const {id, title, quote, content, file, autor} = this.posts[0];
                this.selected = id
                this.title = title
                this.quote = quote
                this.content = content
                this.file = file
                this.autor = autor

            } 
            catch(e) {
              console.log(e);
            }        
        }
    },
    watch: {
          selected(value_id) {
          const {id, title, quote, content, file} = this.posts.find(p => p.id === value_id);

          this.selected = id
          this.title = title
          this.quote = quote
          this.content = content
          this.file = file

       }
    }
  }
</script>

<style>
   .form_search_post {
          padding: 30px 20px;
   }
</style>