import firebase from 'firebase/app'

export default {
    actions: {
        async fetchUser({dispatch, commit}) {// загрузка данных пользователя в state если он залогинен
            try {
                const uid = await dispatch("getUserId");

                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val();
                //console.log("info from fetchUser "+ info);

                commit("setUserInfo", info);
            }
            catch (e) {
                commit('setError', e);
            }
        }
    },
    mutations: {
        setUserInfo(state, info) {
            state.user_info = info
        },
        clearUserInfo(state) {
            state.user_info = {}
        },
    },
    state: {
      user_info: {},
    },
    getters: {
        getUserInfo: s => s.user_info
    },
  }