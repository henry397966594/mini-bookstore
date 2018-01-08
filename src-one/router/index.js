import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../containers/Home.vue';
import List from '../containers/List.vue';
import Add from '../containers/Add.vue';
import Update from '../containers/Update.vue'


Vue.use(VueRouter);


export default new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List},
        {path:'/add',component:Add},
        {path:'/update/:id',component:Update,name:'update'},
        {path:'*',redirect:'/home'}
    ]
})