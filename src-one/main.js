import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import './common/index.less';

//轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);//使用轮播图插件
new Vue({
    el:'#app',
    router:router,
    // template: '<App/>',
    // components: { App }
    render:h => h(App)

})