<template>
  <div class="portfolio">

        <section class="container">
        <div class="row">
            <div class="btn-group col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" @click="views = !views"><i class="fa fa-list-ul fa-1x btn__icon" aria-hidden="true"></i>Списком </button>
                <button type="button" class="btn btn-secondary" @click="views = !views"><i class="fa fa-th-large fa-1x btn__icon" aria-hidden="true"></i>Плиткой</button>
            </div>
            <div class="btn-group col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary" id="pagination_post">Пагинация  </button>
              <button type="button" class="btn btn-secondary" id="pagination_list">Прокрутка</button>
            </div>
            <b-dropdown class="btn-group col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" role="group" text="Сортировка">
              <b-dropdown-item><i class="fa fa-sort-amount-asc fa-1x btn__icon" aria-hidden="true"></i> <span>Выводить в обратном порядке</span></b-dropdown-item>
              <b-dropdown-item><i class="fa fa-leanpub fa-1x btn__icon" aria-hidden="true"></i>         <span>По алфавиту</span></b-dropdown-item>
              <b-dropdown-item><i class="fa fa-clock-o fa-1x btn__icon" aria-hidden="true"></i>         <span>По дате</span></b-dropdown-item>
            </b-dropdown>

            <b-dropdown class="btn-group col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4" role="group" text="Количество постов">

              <!-- <b-dropdown-item
                v-for="(item, i) in allItems " 
                :key="i"
                @click="getSelectPosts"
              >
              {{i+1}}
              </b-dropdown-item> -->

            </b-dropdown>

            <div class="text-right  col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 pageValue"></div> 
        </div>
      </section> 

      <section class="container">
            <listList
              :data_posts="pos"
              v-if="views"
            ></listList>

            <tileList
              :data_posts="pos"
              v-else
            ></tileList>
      </section> 
      <section aria-label="Page navigation example">
        <paginate
          :page-count="pageCount"
          :click-handler="pagination"
          :prev-text="'Назад'"
          :next-text="'Вперёд'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-link'"
          :next-class="'page-link'"
        >
        </paginate>
      </section>
  </div>
</template>

<script>
 import listList from '@/components/portfolio/listList.vue'
 import tileList from '@/components/portfolio/tileList.vue'
 import pageList from '@/mixins/pagination.mixin'

  export default {
    name: 'Portfolio',
    mixins: [pageList],
    components: {
        listList,
        tileList
    },
    data() {
      return {
        views: true,
        SelectPosts: 10,
        pos: {}
      }
    },
    methods: {
      getPostList() { 
        
      //    fetch('http://jsonplaceholder.typicode.com/posts/')
      //   .then(response => response.json())
      //   .then(json => {
      //     this.pos = json
      //   })
//         console.log("this.pos" +this.pos)
// // let array = JSON.parse(this.pos)
// let json = JSON.stringify(this.pos);
//         alert(json)
        // this.setupPagination(array[0])
      },
      getSelectPosts(e){
        this.SelectPosts = e.target.textContent
        // this.getPostList(this.SelectPosts)
        // console.log(e.target.textContent)
      },
      pagination:  function(pageNum) {
        // this.getPostList(pageNum)
        this.page = pageNum;
        console.log("pageNum "+ pageNum)
      }
    },
    mounted() {
        this.getPostList()
    }
  }


</script>
<style>
  .portfolio {
      margin-top: 50px;
  }
</style>