<template>
   <form @submit.prevent="submitSearchEditPost" v-if="!is_select_post" enctype="multipart/form-data" class="card form_search_post">
        <div class="form-group">
            <label for="exampleInputEmail1">Найти пост</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="form.mail">
        </div>
        <button type="submit" class="btn botton--green">Отправить</button>
    </form>

    <form @submit.prevent="submitUpdatePost" v-else  method="post" enctype="multipart/form-data" class="card form_search_post">
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
    // import router from '@/router/index'
// import _ from "lodash"

  export default {
    data() {
      return {
        form: {
            mail: '',
            password: ''
        },
        is_select_post: false,
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
        async submitSearchEditPost() {
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
                //         this.is_select_post = true    
                //         // router.push({ path: 'admin_panel' })
                //     }
                // })
        },
        onFileChange() {

        },
        async submitUpdatePost() {
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
                //             "keyword": this.form.keyword,
                //             // "keyword": this.form.keyword,
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