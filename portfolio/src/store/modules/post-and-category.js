import firebase from 'firebase/app'

export default {
    actions: {
        async createPost({commit, dispatch }, {title, quote, content, keyWord, file}) {
            try {
                const uid = await dispatch("getUserId");

                const post = await firebase.database().ref(`/users/${uid}/posts`).push({title, quote, content, file})

                return {title, quote, id: post.key, status: true}
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async createCategory({commit, dispatch }, title) {
            try {
                const uid = await dispatch("getUserId");
                
                await firebase.database().ref(`/users/${uid}/category/`).push({title})

                return true;
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async fetchCategories({commit, dispatch }) {
            try {
                const uid = await dispatch("getUserId");
                
                const categories = (await firebase.database().ref(`/users/${uid}/category/`).once('value')).val() || {}

                /**
                 * в categories запрос к firebase запишет массив с выборкой всех котегорий, но он будет не в том формате в котором нужены не обьекты 
                 * а массив категорий поэтому я прохожусь по всем обьектам полученным из бд, и записываю их в новый массив с которым потом буду работать.
                 * можно пойти двумя путями 
                 * 1 используя forEach
                 * 2 используя map()
                 * 
                 * в map я создою новый массив и переписываю в него автоматически все поля, в котегориях оно у меня одно поэтому только оно туда зпишется title
                 *  (...categories[key]) и к нему добавляю ещё поле id (в получаемом из firebase массиве id был отдельно в обьекте его пришлось добавлять искуственно в массив)
                 */
                // let categoriesNewArray = [];
                // Object.keys(categories).forEach(key => {//key это индекс категории которую я записываю (id: key) в новом массиве
                //     categoriesNewArray.push({
                //         title: categories[key].title,
                //         id: key
                //     })
                // })
                // return categoriesNewArray;
                // console.log("categories select "+ categories)
                return Object.keys(categories).map( key => ({...categories[key].title, id: key }))
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async updateCategory({commit, dispatch }, {id, title}) {
            try {
                const uid = await dispatch("getUserId");
                
                // .child(uid) т.е. достаю нужную мене категорию
                // .update({title}) обновляю выбраную категорию

                await firebase.database().ref(`/users/${uid}/category/`).child(id).update({title: title})

            }
            catch(e) {
                commit('setError', e);
            }
        }
    },
    mutations: {
    },
    state: {
   
    },
    getters: {

    },
}