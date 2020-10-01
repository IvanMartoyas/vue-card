import firebase from 'firebase/app'
import router from '@/router/index'
/**
 *  во  VUEX обращаться к экшенам (actions), можно только через метод dispatch
 *  */
export default {
 
    actions: {// если пользователь сделал событие, то перед тем как обновить переменню в state, я погу сделать проверку
        // change_select_form(ctx, data) {
        //     // после обработки события вызываю функцию из mutations, чтобы обновить state
        //     // первый параметр это имя функции, второй данные которые в неё передаю
        //     ctx.commit('update_select_form', data)
        // },
        // change_people_page(ctx, data) {
        //     ctx.commit('update_people_page', data)
        // },
        async Login({dispatch, commit}, {email, password}) {// eslint-disable-line no-unused-vars
            try{ 
                await firebase.auth().signInWithEmailAndPassword(email, password);
                await dispatch('fetchUser');
            }
            catch(e) {// eslint-disable-line no-useless-catch
                commit('setError', e);
                throw new Error(e);
            }
        },
        async Registration({dispatch, commit}, {email, password, name, second_name}){// eslint-disable-line no-unused-vars
            try{ 
                /**
                 * ситуация такая что createUserWithEmailAndPassword позволяет сделать регистрацию только почты и пароля
                 * но другие поля туда уже входят, их я сохраняю отдельно в базе данных 
                 * т.е. сначала 
                 * 1 я делаю регистрацию юзера
                 * 2 затем через метод getUserId получаю Id зареганого юзера
                 * 3 подключаюсь к БД
                 * 4 записываю дополнительные поля привязав их к Id юзера уже в таблицу бд
                 * 
                 * у меня не работает изза того что я не вышел из старого пользователя 
                 */
                await firebase.auth().createUserWithEmailAndPassword(email, password);

                const uid = await dispatch('getUserId');

                // console.log("uid "+dispatch('getUserId'));
                
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    second_name,
                    rights: "user",
                    mail: email
                })

            }
            catch(e) {// eslint-disable-line no-useless-catch
                commit('setError', e);
                throw new Error(e);
            }
        },
        async getUserId() {// возвращает id(Uid) пользователя который залогинен
            const user = await firebase.auth().currentUser;// обращаемся к auth это модуль авторизации и достоём зареганого юзера
            return user ? user.uid : null// если пользователь залогинен то вернёт его id, если нет то вернёт null
        },
        async getUserList() {
            const data = await firebase.database().ref(`/users/`);
            return data;
        },
        async getUserData({commit}) {
            try {
                return await firebase.auth().currentUser;
            }
            catch(e) {
                commit('setError', e);
            }
        },
        async Logout({commit, getters}) {
            try {

                await firebase.auth().signOut();
                router.push({ path: '/home' })

        
                commit('clearUserInfo');// LogOut from firebase
            }
            catch(e) {
                commit('setError', e);
            }
        }
    },
    mutations: {// в мутациях я записываю данные в state
        // update_select_form(state, data) {// первый параметр это стэйт, второй это данные которые я хочу записать в переменную из стэйта
        //     state.select_form = data;
        // },
        // update_people_page(state, data) {
        //     state.people_page = data;
        // }
    },
    state: { // данные которые я храню глобально
        // select_form: true,
        // people_page: 'outside'

    },
    getters: { // я получаю данные из state не на прямую, а через функцию из getters, которая возвращает значение переменной state
        // getSelectForm(state) {
        //     return state.select_form
        // },
        // getPeople_page(state) {
        //     return state.people_page
        // }
    }

}