<template>

    <form @submit.prevent="submitHandle">
        <div class="form-group">
            <label for="exampleInputEmail1">Почта</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model.lazy="$v.email.$model" aria-describedby="emailHelp">
            <small  class="btn form-text bg-danger text-light" v-if="$v.email.$dirty && !$v.email.email">Некорректный почтовый адрес.</small>
            <small  class="btn form-text  bg-danger text-light" v-else-if="$v.email.$dirty && !$v.email.required">Введите почту.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" v-model.lazy="$v.password.$model" class="form-control" id="exampleInputPassword1">
            <small  class="btn form-text  bg-danger text-light"  v-if="$v.password.$dirty && !$v.password.minLength">Пароль должен быть больше 6 символов.</small>
            <small  class="btn form-text  bg-danger text-light"  v-else-if="$v.password.$dirty && !$v.password.required">Пароль не указан.</small>
        </div>
        <div class="align-left mb-3">
            <div class="navbar_a btn" v-if="visible_button" @click="entrance_registration"> Перейти к регистрации</div>
        </div>
        
    
        <button type="submit" class="btn botton--green">Отправить</button>
    </form>
 
</template>

<script>
    import axios from 'axios'// eslint-disable-line no-unused-vars
    import { email, required, minLength } from 'vuelidate/lib/validators'
    import router from '@/router/index'
// import _ from "lodash"

  export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    props: {
        visible_button: {
            default: false
        }
    },
    validations: {
        email: {
          email,
          required
        },
        password: {
          required,  
          minLength: minLength(6)       
        },
    },
    mounted() {
    },
    methods: {
        entrance_registration() {
            this.$emit('entrance_registration',false);
        },
        async submitHandle() {
            if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            else {

                let formData = {
                    email: this.email,
                    password: this.password
                }

                /*
                    text exit
                    login i@yandex.ru
                    password 123456
                
                */
                try {
                    await this.$store.dispatch('Login', formData);
                    router.push({ path: 'admin_panel' })
                    console.log("Login OK");
                } catch(e) {
                    // this.$store.dispatch('dataError', e);
                }
                      
            }
        }
    }
}
</script>

<style scoped>
.center_align {
    margin: 0 auto;
    margin-top: 50px;
}
.error {
  background: red;
  color: white;
}
   .card-body {
      margin: 20px 0
   }
</style>