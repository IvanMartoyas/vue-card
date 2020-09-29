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
        async fatchPosts({commit, dispatch }) {
            try {
                const uid = await dispatch("getUserId");
                
                const posts = (await firebase.database().ref(`/users/${uid}/posts/`).once('value')).val() || {}

                // Object.keys превратит все вложненные обьекты в обьекте posts в один массив
                // а forEach позволит пробежаться по этому массиву 
                // где key это будет имя обьекта на выбранной итерации, это счётчик 
                let new_posts = [];  
                Object.keys(posts).forEach(key => {
                    new_posts.push({
                        title: posts[key].title,
                        quote: posts[key].quote,
                        content: posts[key].content,
                        file: posts[key].file,
                        id: key
                    })
                }) 
                console.log(new_posts);
                return new_posts;
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async createCategory({commit, dispatch }, title) {
            try {
                const uid = await dispatch("getUserId");
                
                const post = await firebase.database().ref(`/users/${uid}/category/`).push({title})

                return true;
            }
            catch(e) {
                commit('setError', e);
            }
        },

    },
    mutations: {
    },
    state: {
   
    },
    getters: {

    },
}