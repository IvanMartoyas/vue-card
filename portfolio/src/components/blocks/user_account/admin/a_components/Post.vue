<template>
    <div class="post">
        <ul class="post__bar card">
            <li class="post__item" @click="vews_component = 'create'">
                Создать
            </li>
            <li class="post__item" @click="vews_component = 'edit'">
                Редактировать
            </li>

        </ul>
        <div class="admin_panel__contentSide">
            <Post_create    v-if="vews_component == 'create'"></Post_create>
            <Post_edit      v-if="vews_component == 'edit'"></Post_edit>
        </div>
    </div>
</template>

<script>
import Post_create from './post_component/Post_create'
import Post_edit from './post_component/Post_edit'

  export default {
    components: { 
        Post_create,
        Post_edit
    },
    data() {
      return {
          isActive: true,
          vews_component: 'create'
      }
    },
    props: {
       data_posts: {},
    },
    methods: {
        async submitHandle() {

        }
    }
  }
</script>

<style>
    .post {
        color: #000;
    }
    .post__bar {
        list-style: none;
        padding: 0;
        display: block;
        text-align: left;
    }
    .post__item {
        padding: 20px 25px;
        margin-right: 10px;
        display: inline-block;
        cursor: pointer;
    }
    .post__item:hover {
        background: #224c52;
        color: #fff;
        font-weight: 500;
    }
</style>