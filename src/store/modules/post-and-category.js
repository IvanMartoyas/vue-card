import firebase from 'firebase/app'

export default {
    actions: {
        async createPost({commit, dispatch }, {title, quote, content, keyWord, file}) {
            try {
                const uid = await dispatch("getUserId");

                let autor = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val() || {}
                
                let time = new Date();

                autor.date = time.getHours()+":"+  time.getMinutes()+"  "+time.getDate()+"."+time.getMonth()+"."+time.getFullYear();

                // console.log("autor.data  "+autor.data )
                const post = await firebase.database().ref(`/posts/`).push({
                    title,
                    quote, 
                    content, 
                    file, 
                    autor: autor.name + " "+ autor.second_name,
                    date: autor.date 
                })

                return {title, quote, id: post.key, status: true}
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async fatchPosts({commit, dispatch }) {
            try {
                const uid = await dispatch("getUserId");
                
                let data = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val() || {}
                
                let autor = data.name + " "+ data.second_name;
                console.log("autor "+ autor);

                let posts = (await firebase.database().ref().child("posts").orderByChild("autor").equalTo(autor).once('value')).val() || {}    
                
                /* 
                    Object.keys превратит все вложненные обьекты в обьекте posts в один массив
                    а forEach позволит пробежаться по этому массиву 
                    где key это будет имя обьекта на выбранной итерации, это счётчик 
                */
                 let new_posts = [];  
                Object.keys(posts).forEach(key => {
                    new_posts.push({
                        title: posts[key].title,
                        quote: posts[key].quote,
                        content: posts[key].content,
                        file: posts[key].file,
                        date: posts[key].date,
                        autor: posts[key].autor,
                        id: key
                    })
                }) 
                // console.log(new_posts);
                return new_posts;
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async fatchPostsById({commit, dispatch }, id) {
            try {

                let post = (await firebase.database().ref(`/posts/`).child(id).once('value')).val() || {}

                return {...post, id: id}
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async getAllPosts() { 
            let posts = (await firebase.database().ref("/posts/").once('value')).val() || {}

            let new_All_posts = []; 
            Object.keys(posts).forEach(key => {

                new_All_posts.push({
                    title: posts[key].title,
                    quote: posts[key].quote,
                    content: posts[key].content,
                    file: posts[key].file,
                    autor: posts[key].autor,
                    date: posts[key].date,
                    id: key
                })
            });
            
            console.log(new_All_posts)

            return new_All_posts;
        },
        async updatePost({commit, dispatch }, data ) { // в data лежит обьект с данными  {id: this.selected, title: this.title, quote: this.quote, content: this.content, file: this.file} 
            try {
                const uid = await dispatch("getUserId");
                
                await firebase.database().ref(`/posts/`).child(data.id).update({
                    title: data.title, 
                    quote: data.quote,
                    content: data.content,
                    file: data.file,
                    autor: data.autor,
                    date: new Date().toString()
                })

                return true;
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async deletePost({commit}, id) {
            try {
                console.log("id "+ id)
                await firebase.database().ref('posts/'+id).remove();
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
        async getAllPosts({commit, dispatch }) {
           
        
          
        }
    },
}