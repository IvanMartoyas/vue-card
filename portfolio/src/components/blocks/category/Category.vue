<template>
    <div class="card">
        <form class="form_search_post">
            <div class="form-group">
                <label for="exampleInputEmail1">Создать</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model.lazy="$v.title.$model">
                <small  class="btn form-text bg-danger text-light" v-if="$v.title.$dirty && !$v.title.maxLength">Название категории не должно быть больше 15 символов.</small>
            </div>
            <button type="button" @click="createCategory" class="btn botton--green">Отправить</button>
        </form>
        <form class="form_search_post">
            <div class="form-group">
                <label for="exampleInputEmail1">Редактировать</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model.lazy="$v.title.$model">
             </div>
            <button type="button"  class="btn botton--green">Отправить</button>
        </form>
    </div>
</template>


<script>
    import {  maxLength  } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        title: '',
      }
    },
    validations: {
        title: {
          maxLength : 15
        },
    },
 
    methods: {
        async createCategory() {
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            else {
                try{ 
                    let post = await this.$store.dispatch("createCategory", {title: this.title})

                    this.title = '';
                    this.$v.$reset();
                    await this.$store.dispatch("Massage", "Категоря создана успешно. ");
             
                }
                catch(e) {
                    console.log("errorl create post: "+ e);
                }
            }
        },

    }
}
</script>

<style>

</style>