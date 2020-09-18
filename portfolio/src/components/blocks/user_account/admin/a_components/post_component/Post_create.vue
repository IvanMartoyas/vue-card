<template>

   <form @submit.prevent="submitCreatePost" ref="form_create_post"  method="post" enctype="multipart/form-data" class="card form_search_post">
        <div class="form-group">
            <label for="title1">Заголовок</label>
            <input type="text" class="form-control" id="title1" v-model="form.title"  name="title" >
        </div>
        <div class="form-group">
            <label for="quote1">Цитата</label>
            <input type="text" class="form-control"  v-model="form.quote" name="quote" id="quote1"/>
        </div>
        <div class="form-group">
            <label for="Kontent1">Контент</label>
            <textarea type="text" class="form-control"  v-model="form.content" name="content" id="Kontent1">
            </textarea>
        </div>
        <div class="form-group">
            <label for="KeyWord1">Ключевые слова</label>
            <input type="text" class="form-control"  v-model="form.keyWord" name="keyword" id="KeyWord1"/>
        </div>
        <div class="form-group">
            <label for="File1">Выберите фото </label>
            <input type="file" class="form-control-file"  @change="onFileChange" name="file" id="File1"/>
        </div>
        <button type="submit" class="btn botton--green">Отправить</button>
    </form>

    
</template>


<script>
    // import axios from 'axios'
    // import FormData from 'form-data'
    // import router from '@/router/index'
    // import _ from "lodash"

  export default {
    data() {
      return {
        form: {
            title: '',
            quote: '',
            content: '',
            keyWord: '',
            file: ''
        },
        valid: false,
        errors: {
            mail: "",
            password: ""
        }
      }
    },
    props: {
       data_posts: {},
    },
    methods: {
        onFileChange(e) {

        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        // console.log("files "+files[0])
        this.form.file = files[0]
        console.log("file_size "+this.form.file.name )
        }, 
        async submitCreatePost() {

            // let formData = new FormData();

            // formData.append("action", "create_post")
            // formData.append("title", this.form.title)
            // formData.append("quote", this.form.quote)
            // formData.append("content", this.form.content)
            // formData.append("keyWord", this.form.keyWord)
            // formData.append('file', this.form.file) 


            console.log( "click")

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