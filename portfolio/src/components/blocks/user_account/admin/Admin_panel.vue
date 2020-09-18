<template>
    <section class="admin_panel">
        <div class="admin_panel__toolsBar">
            <ul class="nav flex-column card ">
                <li class="nav-item toolsBar__item" @click="vews_component = 'post'">
                    Посты
                </li>
                <li class="nav-item toolsBar__item" @click="vews_component = 'user_role'">
                    Групповая политика
                </li>
            </ul>
        </div>
        <div class="admin_panel__contentSide">
                <Post       v-if="vews_component == 'post'"></Post>
                <User_role  v-if="vews_component == 'user_role'"></User_role>
        </div>
    </section>
</template>

<script>
import Post from './a_components/Post'
import User_role from "./a_components/User_list"

  export default {
    components: { 
        Post,
        User_role
    },
    data() {
      return {
          isActive: false,
          vews_component: 'post'
      }
    },
    mounted() {
        //console.log("geiUid "+ this.$store.dispatch('getUserId'))
    },
    methods: {
        async submitHandle() {

        }
    }
  }
</script>

<style>
   .card-body {
      margin: 20px 0
   }
   .active {
       
   }
   .toolsBar__item {
       padding: 5px 25px

   }
   .toolsBar__item:hover {
        cursor: pointer;
        background: #224c52;
        color: #fff;
   }
   .admin_panel {
        max-width: 1400px;
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;
   }
   .admin_panel__toolsBar {
       width: 400px;
       margin-right: 20px;
   }
   .admin_panel__contentSide {
       width:  100%;
   }

    @media screen and (max-width: 630px) { 
        .admin_panel {
            display: block;
        }
        .admin_panel__contentSide {
            width: 100% ;
        }
        .admin_panel__toolsBar {
             width: 100% ;
            margin-bottom: 50px;
        }
        .toolsBar__item:first-child {
            border-bottom: 1px solid #ccc;
        }
        .admin_panel {
            padding: 0 10px;
        }
    }
</style>