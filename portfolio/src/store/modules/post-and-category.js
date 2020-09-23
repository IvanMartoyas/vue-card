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
                
                const post = await firebase.database().ref(`/users/${uid}/category/`).push({title})

                return true;
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