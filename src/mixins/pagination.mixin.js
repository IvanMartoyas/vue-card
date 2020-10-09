import _ from 'lodash'

export default {
    data() {
        return {
            page: this.$route.query.page || 1,// индекс страници на которой находится пользователь по дефолту
            // чтобы можно было сохранить url страници на которой я остановлся, в query параметрах урла, я сохраняю номер страници
            // и знаком плюс (+), привожу его от строкового типа к числавому 
            select_posts: 3,// количество выводимых постов
            pageCount: 0,//количество страниц
            all_items: [],// масив со всеми постами
            posts: [],// масив выбраных постов для отображения
            post_list_end: false,// если true то посты кончелись и выводить нечего 
        }
    },
    methods: {
        setupPagination(all_items) {

            this.all_items = _.chunk(all_items, this.select_posts);// делю  массив на массивы вместимостью   this.pageSize элементов
            
            this.pageCount = _.size(this.all_items);// записываю количество страниц которые будут показаны пользователю
            
            this.posts = this.all_items[this.page - 1] || this.all_items[0];// в зависимости от выбраной страници выбираю масив для вывода в соответствии с выбраным индексом

            // debugger;
        },
        paginationChangePage() {
            this.$router.push(`${this.$route.path}?page=`+this.page)
            this.posts = this.all_items[this.page -1] || this.all_items[0];
        },
        setLoadPost() {

            let new_posts_array = this.all_items[this.page++] || [];

            if(_.size(new_posts_array) != 0) {

                this.posts = this.posts.concat(new_posts_array);
                // debugger;
                return true;
            }
            else {
                this.post_list_end = true;
                return false;
            }
        }
    },
}