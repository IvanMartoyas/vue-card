<template>
   <b-navbar toggleable="lg" type="dark"  class="bg-sucsess" >
        
     
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item ><router-link to="/" class="navbar_a link--light">Главная</router-link></b-nav-item>
            <b-nav-item ><router-link to="/Article" class="navbar_a link--light ">Статьи</router-link></b-nav-item>
            <b-nav-item ><router-link to="/about"   class="navbar_a link--light">О мне</router-link> </b-nav-item>
            <b-nav-item ><router-link to="/contact" class="navbar_a link--light">Контакты</router-link></b-nav-item>
            <b-nav-item v-if="name"><router-link to="/Auth" class="navbar_a link--light" >Личный кабинет </router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <div v-if="!name">  
                <router-link to="/Auth" class="navbar_a" >
                    <svg class="userIcon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 478.407 478.407" style="enable-background:new 0 0 478.407 478.407;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M239.608,0C107.649-0.223,0.494,106.57,0.271,238.529c-0.11,65.237,26.459,127.682,73.54,172.84
                                    c0.137,0.136,0.188,0.341,0.324,0.461c1.382,1.331,2.884,2.458,4.284,3.738c3.84,3.413,7.68,6.946,11.725,10.24
                                    c2.167,1.707,4.42,3.413,6.639,4.983c3.823,2.85,7.646,5.7,11.639,8.329c2.714,1.707,5.513,3.413,8.294,5.12
                                    c3.686,2.219,7.356,4.454,11.162,6.485c3.226,1.707,6.519,3.174,9.796,4.727c3.584,1.707,7.117,3.413,10.786,4.949
                                    c3.669,1.536,7.356,2.731,11.076,4.062s6.929,2.56,10.496,3.652c4.028,1.212,8.158,2.15,12.254,3.157
                                    c3.413,0.836,6.724,1.792,10.24,2.475c4.71,0.939,9.489,1.536,14.268,2.185c2.953,0.41,5.837,0.99,8.823,1.28
                                    c7.817,0.768,15.701,1.195,23.654,1.195s15.838-0.427,23.654-1.195c2.987-0.29,5.871-0.87,8.823-1.28
                                    c4.779-0.649,9.557-1.246,14.268-2.185c3.413-0.683,6.827-1.707,10.24-2.475c4.096-1.007,8.226-1.946,12.254-3.157
                                    c3.567-1.092,7.014-2.423,10.496-3.652c3.482-1.229,7.441-2.56,11.076-4.062s7.202-3.26,10.786-4.949
                                    c3.277-1.553,6.571-3.021,9.796-4.727c3.806-2.031,7.475-4.267,11.162-6.485c2.782-1.707,5.581-3.26,8.294-5.12
                                    c3.994-2.628,7.817-5.478,11.639-8.329c2.219-1.707,4.471-3.243,6.639-4.983c4.045-3.243,7.885-6.69,11.725-10.24
                                    c1.399-1.28,2.901-2.406,4.284-3.738c0.136-0.119,0.188-0.324,0.324-0.461c46.912-44.929,73.428-107.076,73.404-172.032
                                    C478.36,107.378,371.567,0.223,239.608,0z M406.013,357.729c-10.952-51.083-44.59-94.39-91.375-117.641
                                    c38.245-41.661,35.475-106.438-6.186-144.683C266.79,57.16,202.014,59.93,163.769,101.591c-35.954,39.166-35.954,99.332,0,138.497
                                    c-46.785,23.251-80.423,66.557-91.375,117.641c-65.565-91.946-44.179-219.635,47.768-285.2
                                    c34.744-24.775,76.369-38.06,119.042-37.992c112.929-0.18,204.621,91.221,204.801,204.15
                                    C444.073,281.36,430.788,322.985,406.013,357.729z"/>
                            </g>
                        </g>
                    </svg>
                </router-link>
            </div>
            <div v-else @click="LogOut" class="userName">
                <span v-if="name">{{name}}</span>
                <svg  class="userExitButton" viewBox="0 0 512.00533 512"  xmlns="http://www.w3.org/2000/svg"><path d="m320 277.335938c-11.796875 0-21.332031 9.558593-21.332031 21.332031v85.335937c0 11.753906-9.558594 21.332032-21.335938 21.332032h-64v-320c0-18.21875-11.605469-34.496094-29.054687-40.554688l-6.316406-2.113281h99.371093c11.777344 0 21.335938 9.578125 21.335938 21.335937v64c0 11.773438 9.535156 21.332032 21.332031 21.332032s21.332031-9.558594 21.332031-21.332032v-64c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-.8125 0-1.492188.36328175-2.28125.46874975-1.027344-.085937-2.007812-.46874975-3.050781-.46874975-23.53125 0-42.667969 19.13281275-42.667969 42.66406275v384c0 18.21875 11.605469 34.496093 29.054688 40.554687l128.386718 42.796875c4.351563 1.34375 8.679688 1.984375 13.226563 1.984375 23.53125 0 42.664062-19.136718 42.664062-42.667968v-21.332032h64c35.285157 0 64-28.714844 64-64v-85.335937c0-11.773438-9.535156-21.332031-21.332031-21.332031zm0 0"/><path d="m505.75 198.253906-85.335938-85.332031c-6.097656-6.101563-15.273437-7.9375-23.25-4.632813-7.957031 3.308594-13.164062 11.09375-13.164062 19.714844v64h-85.332031c-11.777344 0-21.335938 9.554688-21.335938 21.332032 0 11.777343 9.558594 21.332031 21.335938 21.332031h85.332031v64c0 8.621093 5.207031 16.40625 13.164062 19.714843 7.976563 3.304688 17.152344 1.46875 23.25-4.628906l85.335938-85.335937c8.339844-8.339844 8.339844-21.824219 0-30.164063zm0 0"/></svg>
            </div>  
        </b-navbar-nav>
        </b-collapse>
  </b-navbar>    
</template>

<script>
    import firebase from 'firebase/app'
    export default {

        data: function () { 
            return {
                view_botton: true
            }
        },

        computed: {// будет реагировать на любое изменнение getters в vuex
            name() {
             
                    return this.$store.getters.getUserInfo.name;
              
                 
            }
        },
        methods: {
            select_form(data) {
                // this.$store.dispatch("change_select_form", data)
                // console.log(data)
            },
            LogOut() {
                this.$store.dispatch('Logout');
            }
        },
        watch: {
            name() {
                return this.$store.getters.getUserInfo.name
            }
        }
    }
</script>

<style scoped>
    a:hover {
         border: none
    }      
    a {
         border: none
    } 
    .link a{
        border: none
    }
    .link a:hover {
         border: none
    } 

    .form-inline {
        margin: 0 auto;
    }
    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        border: 0!important
    }
    .navbar-collapse {
        min-height: 60px;
        width: 100%;
    }
    nav {
        /* padding: 0 30px */
    }
    @media screen and (max-width: 991px) {
        .navbar-collapse {
            padding: 20px 0;  
            position: absolute;
            top: 60px;
            left: 0;
            z-index: 999;
        }
    }
    @media screen and (max-width: 761px) { 
        .userName{
            margin-top: 15px;
            margin-bottom: 5px;
        }
        .searche_site {
            margin-top: 5px;
        }
    }
   
</style>
