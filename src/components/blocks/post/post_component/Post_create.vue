<template>

   <form @submit.prevent="submitCreatePost" method="post" enctype="multipart/form-data" class="card form_search_post">
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
        <button type="submit" class="btn botton--green">Отправить</button>
    </form>

    
</template>


<script>
    // import axios from 'axios'
    // import FormData from 'form-data'
    // import router from '@/router/index'
    // import _ from "lodash"
    import { email, required, minLength } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                title: '',
                quote: '',
                content: '',
                file: ''
        }
    },
    mounted() {
   
        // this.$store.dispatch("getAllPosts");
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
    methods: {
        // onFileChange(e) {
        //     // load image
        //     let files = e.target.files || e.dataTransfer.files;
        //     if (!files.length)
        //         return;
        //     // console.log("files "+ files[0])
        //     this.form.file = files[0]
        //     console.log("file_size "+ this.form.file.name )
        // }, 
        entrance_registration() {
            this.$emit('entrance_registration', false);
        },
        async submitCreatePost() {
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            else {
                try{ 
                    let post = await this.$store.dispatch("createPost", {
                        title: this.title,
                        quote: this.quote,
                        content: this.content,
                        file: this.file
                    });

                    this.$v.$reset()
                    this.title = '';
                    this.quote =  '';
                    this.content =  '';
                    this.file =  '';

                }
                catch(e) {
                    console.log("errorl create post: "+ e);
                }
            }


        }
    }
}
</script>

<style>
.form_search_post {
          padding: 30px 20px;
   }
</style>