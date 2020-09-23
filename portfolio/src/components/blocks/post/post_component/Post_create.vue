<template>

   <form @submit.prevent="submitCreatePost" ref="form_create_post"  method="post" enctype="multipart/form-data" class="card form_search_post">
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
            <input  class="form-control-file"  @change="onFileChange" v-model.lazy="$v.file.$model" name="file" id="File1"/>
            
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
        onFileChange(e) {
            // load image
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            // console.log("files "+files[0])
            this.form.file = files[0]
            console.log("file_size "+this.form.file.name )
        }, 
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

                    this.title = '';
                    this.quote =  '';
                    this.content =  '';
                    this.file =  '';
                    this.$v.reset();
                }
                catch(e) {
                    console.log("errorl create post: "+ e);
                }
            }

            // let formData = new FormData();

            // formData.append("action", "create_post")
            // formData.append("title", this.form.title)
            // formData.append("quote", this.form.quote)
            // formData.append("content", this.form.content)
            // formData.append("keyWord", this.form.keyWord)
            // formData.append('file', this.form.file) 
            // console.log( "click")
                // try {
                //     axios({
                //         method: 'post',
                //          url: 'http://localhost:8080/admin_panel',
                //         data: {
                //             "action": "create_post",
                //             "title": this.form.title,
                //             "quote": this.form.quote,
                //             "content": this.form.content,
                //             "keyWord": this.form.keyWord,
                //             // "file": this.form.file
                //         }
                        
                //     }).then(function (response) {
                //         // console.log(response.data.status);
                //         // console.log(response.status);
                //         // response.status
                //         if(response.status == 200){
                //             console.log('SUCCESS!!');
                //             // router.push({ path: 'admin_panel' })
                //         }
                //     })
                   

                //     // await this.$store.dispatch('login', formData)

                //     // console.log("sucsess")
                // }
                // catch(e) {
                //     console.log("Error "+e)
                // }
            //  axios.post( 
            //             'http://localhost:8080/admin_panel/img',
            //             formData,
            //             {
            //                 headers: {
            //                     'Content-Type': 'multipart/form-data'
            //                 }
            //             }
            //         )
            //         .then(function () {
            //             console.log("sucsess")
            //         }); 

        }
    }
}
</script>

<style>
.form_search_post {
          padding: 30px 20px;
   }
</style>