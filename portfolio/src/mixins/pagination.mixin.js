import _ from 'lodash'

export default {
    data() {
        return {
            page: 1,// индекс страници на которой находится пользователь по дефолту
            pageSize: 5,// количество страниц
            pageCount: 0,//количество постов
            allItems: [],// масив со всеми постами
            items: []// масив выбраных постов для отображения
        }
    },
    methods: {
        setupPagination(allItems) {

            // let object = JSON.parse(allItems)
            // console.log("pag object "+object)
            // this.allItems =  _.values(object);
            console.log("pag allItems "+allItems)
            // this.allItems =  _.values(allItems);
            this.allItems = _.chunk(this.allItems, this.pageSize);// делю  массив на массивы вместимостью   this.pageSize элементов
            console.log("this.allItems "+this.allItems)
            this.pageCount = _.size(this.allItems);// записываю количество страниц которые будут показаны пользователю
            this.items = this.allItems[this.page - 1] || this.allItems[0];// в зависимости от выбраной страници выбираю масив для вывода в соответствии с выбраным индексом
            // console.log("this.items "+ this.items)
            // console.log("allItems "+this.allItems[0])
            console.log(this.allItems)
        }
    }
}