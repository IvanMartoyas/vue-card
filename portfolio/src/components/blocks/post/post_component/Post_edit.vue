<template>
   <form v-if="is_select_post" class="card form_search_post">
        <div class="form-group">
            <label for="exampleInputEmail1">Найти пост</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model.lazy="$v.find_post_id.$model">
            <small  class="btn form-text bg-danger text-light" v-if="$v.find_post_id.$dirty && !$v.find_post_id.required">Введите заголовок поста.</small>
        </div>
        <button type="button" @click="submitSearchEditPost" class="btn botton--green">Отправить</button>
    </form>

    <form @submit.prevent="submitUpdatePost" v-else  method="post" enctype="multipart/form-data" class="card form_search_post">
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
            <input type="file" class="form-control-file"  @change="onFileChange" name="file" id="File1"/>
            
            <small  class="btn form-text bg-danger text-light" v-if="$v.file.$dirty && !$v.file.required">Введите изображение.</small>
        </div>
        <button type="submit" class="btn botton--green">Сохранить изменения</button>
    </form>
</template>


<script>
    import { email, required, minLength, numeric } from 'vuelidate/lib/validators'
    // import axios from 'axios'
    // import router from '@/router/index'
    // import _ from "lodash"

  export default {
    data() {
      return {
        find_post_id: '',
        title: '',
        quote: '',
        content: '',
        file: '',
        is_select_post: false

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
    methods: {
        submitSearchEditPost() {
             console.log("click")
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            else {
                this.is_select_post = false  
            }
            console.log("is_select_post "+ this.is_select_post)
                // axios({
                //     method: 'post',
                //     url: 'http://127.0.0.1:8080/admin_panel/',
                //     data: {
                //         "action": "search_edit_post",
                //         "id": 1,
                        
                //     }
                // }).then( (response)  => {
                //     // console.log(response.data.status);
                //     // console.log(response.status);
                //     // response.status
                    
                //     if(response.status == 200){
                //         console.log("OK")
                          
                //         // router.push({ path: 'admin_panel' })
                //     }
                // })
        },
        onFileChange() {

        },
        async submitUpdatePost() {
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }
                // try {
                //     axios({
                //         method: 'post',
                //         url: 'http://127.0.0.1:8080/admin_panel/',
                //         data: {
                //             "action": "update_post",
                //             "id": 1,
                //             "title": this.form.title,
                //             "quote": this.form.quote,
                //             "content": this.form.content,
                //             // "file": this.form.file,
                //         }
                //     }).then(function (response) {
                //         // console.log(response.data.status);
                //         // console.log(response.status);
                //         // response.status
                //         if(response.status == 200){
                //             console.log("OK");
                //             // router.push({ path: 'admin_panel' })
                //         }
                //     })
                //     .then(function () {
                //         // always executed
                //     }); 

                //     // await this.$store.dispatch('login', formData)

                //     // console.log("sucsess")
                // }
                // catch(e) {
                //     console.log("Error "+e)
                // }
            
        }
    }
  }
</script>

<style>
   .form_search_post {
          padding: 30px 20px;
   }
</style>