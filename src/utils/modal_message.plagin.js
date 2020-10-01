export default {
    install(Vue, options) {// eslint-disable-line no-unused-vars 
        //создаю плагин и регистрирую его через install(Vue, options) у него входные параметры по умолчанию
            Vue.prototype.$error = function (html) {
                return '[Ошибка]: '+ html;
            },
            Vue.prototype.$message = function(html){ 
                return html;
            }

    }
}
