<template>
    <section >
        <div class="center_align col-lg-8 col-md-7 col-sm-6 col-xs-12 form">

            <h1 v-if="is_entrance" >Вход</h1> 
            <h1 class=" mt-5" v-else >Регистрация</h1> 

            <Login 
                class="center_align" 
                @entrance_registration="entrance_registration" 
                :visible_button="true"
                v-if="is_entrance"
            ></Login>
        
            <RegisterVue 
                class="center_align" 
                :visible_button="true"
                @entrance_login="entrance_login" 
                v-else
             ></RegisterVue>
            
        </div>
    </section>
</template>

<script>  
    import Login from '../user_form/Login.vue'
    import RegisterVue from '../user_form/RegisterVue.vue'
    import router from '@/router/index'
    import firebase from 'firebase/app'
    export default {
        components: { 
            Login,
            RegisterVue
        },
        props: {
            // flag: {
            //     // default: false
            // }
        },
        data: function () { 
            return {
                is_entrance: true
            }
        },
        created() {
            // this.isLogged = this.$route.query.flag
            // console.log(this.$route.query.name);
        },
        mounted() {
            if(firebase.auth().currentUser != null) { 
                router.push({ path: 'admin_panel' })
            }     
        },
        methods: {
            entrance_registration () {
                this.is_entrance = false;
            },
            entrance_login() {
                this.is_entrance = true;
            }
        },
    }

</script> 

<style scoped>

    .form {
        margin-top: 100px;
    }
</style>