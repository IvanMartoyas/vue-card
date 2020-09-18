import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import messagePlagin from '@/utils/modal_message.plagin'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'


import firebase from 'firebase/app';
 
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyDhWhtVku2v3Ju4cUKJQ1geP5DQ_2V2C6Y",
  authDomain: "portfolio-1db11.firebaseapp.com",
  databaseURL: "https://portfolio-1db11.firebaseio.com",
  projectId: "portfolio-1db11",
  storageBucket: "portfolio-1db11.appspot.com",
  messagingSenderId: "588413916646",
  appId: "1:588413916646:web:b91728a6d52feb154bf227",
  measurementId: "G-WNC6CE5DT7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Валидация полей
Vue.use(Vuelidate);

Vue.config.productionTip = false

//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// axios http://
Vue.use(VueAxios, axios)

Vue.use(messagePlagin)// подлючаю плагин модальных окон

// pagination plagin
Vue.component('paginate', Paginate)



//css
import '@/assets/css/main.css';


let app;

// сначаала длжна загрузиться база данных, и только после этого запускаться само приложение.
firebase.auth().onAuthStateChanged(()=>{
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



