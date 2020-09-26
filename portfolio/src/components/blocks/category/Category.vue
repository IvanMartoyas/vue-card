<template>
    <div class="card">
        <form class="form_search_post" @submit.prevent="createCategory">
            <div class="form-group">
                <label for="exampleInputEmail1">Создать</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model.lazy="$v.title.$model">
                <small  class="btn form-text bg-danger text-light" v-if="$v.title.$dirty && !$v.title.maxLength">Название категории не должно быть больше 15 символов.</small>
            </div>
            <button type="submit" class="btn botton--green">Отправить</button>
        </form>
        <div v-if="categories.length">
            <Loader class="pt-4 pb-4 text-center " v-if="loading"></Loader>
            <form v-else class="form_search_post" @submit.prevent="updateCategory">

                <b-form-select v-model="selected" class="mb-5" >
                    <b-form-select-option 
                        v-for="item in categories"
                        :key="item.id"
                        :value="item.id"
                    >
                        {{item.title}}
                    </b-form-select-option>
                </b-form-select>
                <div class="form-group">
                    <label for="exampleInputEmail1">Редактировать</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model.lazy="$v.u_title.$model">
                    <small  class="btn form-text bg-danger text-light" v-if="$v.u_title.$dirty && !$v.u_title.required">Введите название категории.</small>
                </div>
                <button type="submit" class="btn botton--green">Отправить</button>
            </form>
        </div>
        <div v-else>Категорий пока нет.</div>
    </div>
</template>
<script>
    import {  maxLength, required, minLength  } from 'vuelidate/lib/validators'
    import Loader from '@/components/blocks/loader/Loader'
    export default {
        components: {
            Loader
        },
        data() {
            return {
                title: '',
                selected: '',
                categories: [],
                loading: true,
                u_title: '',
                curent: null,
            }
        },
        validations: {
            title: {
                maxLength : 15
            },
            u_title: {
                required,
            }
        },
        async mounted() {
            this.loading = false;
            this.fetchCategories();
        
        },
        watch: {
            selected(value) {
                const { title }= this.categories.find(c => c.id === value);
                
                this.u_title = title;

                console.log(value)
            }
        },
        created() {

        }, 
        methods: {
            async createCategory() {
                if(this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                else {
                    try{ 
                         console.log("click  createCategory");
                        let post = await this.$store.dispatch("createCategory", {title: this.title})

                        this.title = '';
                        this.$v.$reset();
                        await this.$store.dispatch("Massage", "Категоря создана успешно. ");
                
                    }
                    catch(e) {
                        console.log("errorl create post: "+ e);
                    }
                }
            },
            async updateCategory() {
                if(this.$v.$invalid) {
                    this.$v.$touch();
                    return
                }
                else {
                    try{ 
                        console.log("this.title "+this.u_title);

                        await this.$store.dispatch("updateCategory", {id: this.selected, title: this.u_title})
                        this.u_title = '';

                        this.fetchCategories();
                        this.$v.$reset();
                        await this.$store.dispatch("Massage", "Категоря успешно обновленна.");
                
                    }
                    catch(e) {
                        console.log("errorl update post: "+ e);
                    }
                }
            },
            async fetchCategories() {



                this.categories = await this.$store.dispatch("fetchCategories");
                const category = this.categories[0];
                this.selected = category.id;
                this.u_title = category.title;

            
            
            }
        }
    }
</script>

<style>

</style>