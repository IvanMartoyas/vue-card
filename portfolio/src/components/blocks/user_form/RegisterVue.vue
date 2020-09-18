<template>
    <form  @submit.prevent="submitHandle">
        <div class="form-group">
            <label for="exampleInputname1">Имя</label>
            <input type="text" v-model.lazy="$v.name.$model" class="form-control" id="exampleInputname1" aria-describedby="emailHelp">
            <small  class="btn form-text  bg-danger text-light" v-if="$v.name.$dirty && !$v.name.required">Введите ваше имя.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputSecondName1">Фамилия</label>
            <input type="text" v-model.lazy="$v.second_name.$model" class="form-control" id="exampleInputSecondName1">
            <small  class="btn form-text  bg-danger text-light" v-if="$v.second_name.$dirty && !$v.second_name.required">Введите вашу фамилию.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Почта</label>
            <input type="email" class="form-control" v-model.lazy="$v.email.$model"  id="exampleInputEmail1" aria-describedby="emailHelp">
            <small  class="btn form-text bg-danger text-light" v-if="$v.email.$dirty && !$v.email.email">Некорректный адрес.</small>
            <small  class="btn form-text  bg-danger text-light" v-else-if="$v.email.$dirty && !$v.email.required">Введите почту.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" v-model.lazy="$v.password.$model" class="form-control" id="exampleInputPassword1">
            <small  class="btn form-text  bg-danger text-light"  v-if="$v.password.$dirty && !$v.password.minLength">Некорректный должен быть больше 6 символов.</small>
            <small  class="btn form-text  bg-danger text-light"  v-else-if="$v.password.$dirty && !$v.password.required">Пароль не указан.</small>
            <small  class="btn form-text  bg-danger text-light"  v-else-if="$v.password.$dirty && (this.password != this.password2)">Пароли между собой  не совпадают.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword2">Повторите пароль</label>
            <input type="password" v-model.lazy="$v.password2.$model" class="form-control" id="exampleInputPassword2">
            <small  class="btn form-text  bg-danger text-light"  v-if="$v.password.$dirty && !$v.password.minLength">Некорректный должен быть больше 6 символов.</small>
            <small  class="btn form-text  bg-danger text-light"  v-else-if="$v.password2.$dirty && !$v.password2.required">Пароль не указан.</small>
            <small  class="btn form-text  bg-danger text-light"  v-else-if="$v.password2.$dirty && (this.password != this.password2)">Пароли между собой не совпадают.</small>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" v-model.lazy="$v.police_privacy.$model" class="form-check-input" >
            <div>
    
                <b-modal id="bv-modal-example" hide-footer>
                    <template v-slot:modal-title>
                        Условия политики сайта.
                    </template>
                    <div class="d-block text-center">
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                    </div>
                    <b-button class="mt-3 btn botton--green" block @click="$bvModal.hide('bv-modal-example')">Закрыть</b-button>
                </b-modal>
            </div>
            <label class="form-text text-muted label__polyse"><p class="inline-block" >Вы соглашаетесь с &#160;  </p><i  class="form-text inline-block label__polyse link--green  ml-2" @click="$bvModal.show('bv-modal-example')"> правилами сайта.</i></label>
            
            <small  class="btn form-text  bg-danger text-light"  v-if="$v.police_privacy.$dirty && !$v.police_privacy.required">Для регистрации требуется ваше согласие с правилами сайта.</small>
        </div>
        <div class="align-left mb-3" v-if="visible_button" >
            <a class="navbar_a btn" @click="entrance_login">Войти</a>
        </div>
        <button type="submit" class="btn botton--green">Отправить</button>
    </form>

</template>
<script>
    import router from '@/router/index'
    // import axios from 'axios'
    import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            name: 'ivan',
            second_name: 'mart',
            email: '123@yandex.ru',
            password: '123@yandex.ru',
            password2: '123@yandex.ru',
            police_privacy: true
        }
    },
    props: {
        visible_button: {
            default: false
        }
    },
    validations: {
        name: {
            required
        },
        second_name: {
            required
        },
        email: {
          email,
          required
        },
        password: {
          required,  
          minLength: minLength(6)
        },
        password2: {
          required,  
          minLength: minLength(6)
        },
        police_privacy: {
          required,  
        }
    },
    methods: {
        entrance_login() {
            this.$emit('entrance_login',false);
        },
        async submitHandle() {
             if(this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            else {
                console.log("Registrate true "+ this.email);

                let formData = {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    second_name: this.second_name,
                }
                try{ 
                    await this.$store.dispatch('Registration', formData);
                    router.push({ path: 'admin_panel' })
                    console.log("Registration OK");
                }
                catch(e) {
                    // this.$store.dispatch('dataError', e);
                }
            }
        }
    }
  }
</script>

<style>
   .card-body {
      margin: 20px 0
   }
   .form-group {
        text-align: left;
    }
    .label__polyse {
        font-size: 16px;
        margin: 0!important;
    }
    small {
        width: 100%;
    }
    .center_align {
        margin: 0 auto;
        margin-top: 50px;
    }
</style>