<template>
  <div class="portfolio">

      <section class="container">
        <div class="row">
            <div class="btn-group col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" role="group" aria-label="Basic example">
                <button type="button" class="btn botton--green" @click="views = false"><i class="fa fa-list-ul fa-1x btn__icon" aria-hidden="true"></i>Плиткой </button>
                <button type="button" class="btn botton--green" @click="views = true"><i class="fa fa-th-large fa-1x btn__icon" aria-hidden="true"></i>Списком</button>
            </div>
            <div class="btn-group col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" role="group" aria-label="Basic example">
              <button type="button" class="btn botton--green" @click="pagination_vuew = true">Пагинация  </button>
              <button type="button" class="btn botton--green" @click="pagination_vuew = false">Прокрутка</button>
            </div>
        </div>
      </section> 

      <Loader v-if="loading"></Loader>
      <section v-else class="container">
            <ListList
              :data_posts="posts"
              v-if="views"
            ></ListList>

            <TileList
              :data_posts="posts"
              v-else
            ></TileList>
      </section> 
      <section v-if="pagination_vuew" class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div aria-label=" container Page navigation pagination ">
              <paginate
                v-model="page"
                :page-count="pageCount"
                :click-handler="paginationChangePage"
                :prev-text="'Назад'"
                :next-text="'Вперёд'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"
                :prev-class="'page-link pagination__link'"
                :next-class="'page-link pagination__link'"
              >
              </paginate>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
  import ListList from '@/components/articles/ListList.vue'
  import TileList from '@/components/articles/TileList.vue'
  import pageList from '@/mixins/pagination.mixin'
  import Loader from '@/components/blocks/Loaders/Loader.vue'

  export default {
    name: 'Portfolio',
    mixins: [pageList],
    components: {
        ListList,
        TileList,
        Loader,
    },
    data() {
      return {
        views: true,
        loading: true,
        pagination_vuew: true
      }
    },
    methods: {
      pagination:  function(pageNum) {
        // this.getPostList(pageNum)
        this.page = pageNum;
        console.log("pageNum "+ pageNum)
      }
    },
     mounted() {

          this.$store.dispatch("getAllPosts").then(response => {

          this.setupPagination(response)

          this.loading = false;
        })
           //debugger; 

        // this.getPostList()
    }
  }


</script>
<style>
  .portfolio {
      margin-top: 50px;
  }

</style>