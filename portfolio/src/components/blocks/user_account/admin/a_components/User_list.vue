<template>
    <section class="">
        <div v-for="(user, i) in data" :key="i">
            <span>{{user.info.name}}</span>
        </div>

    </section>
</template>
<script>  
    // import Login from '../user_form/Login.vue'
    // import RegisterVue from '../user_form/RegisterVue.vue'
    // import router from '@/router/index'
    import firebase from 'firebase/app'

    export default {
        data: function () { 
            return {
                data: this.$store.dispatch("getUserList")
            }
        },
        mounted() {
        //    var adaRef = firebase.database().ref("users").key;
            // console.log("json "+ firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).child("info/name").toString())
        }
    }

</script>  