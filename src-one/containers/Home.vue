<template>
    <div class="page">
       <MHeader title="首页"></MHeader>
       <div class="scroll-content">
        <Swiper :swiperSlides="arr"></Swiper>

        <!-- 最新上架 -->
        <h3>最新上架</h3>
        <ul class="hot-list" v-if="books.length">
          <li v-for="(book,index) in books" :key="index">
            <img :src="book.bookCover" alt="">
              <span>{{book.bookName}}</span>
          </li>
        </ul>
        <Loading v-else></Loading>
       </div>
    </div>
</template>
<script>
import MHeader from "../components/Header";
import Swiper from "../components/Swiper";
import axios from 'axios';
import Loading from '../components/Loading'
export default {
  data() {
    return {
      msg: "hello",
      arr: [],
      books:[]
    };
  },
  methods: {
    gethot(){
      axios.get('/api/hot').then(res=>{
        this.books = res.data;
    }).catch(err=>{
      console.log(err);
    })
    }
  },
  components: { MHeader, Swiper,Loading },
  computed: {},
  created(){ //后台获取数据，跨域 8080=>3000
    // 只要以api开头就跳转到3000端口，开发时的解决方案，上线时会放到同一个服务器下没有跨域问题
    axios.get('/api/sliders').then(res=>{
      console.log(res)
      this.arr= res.data;
      
    }).catch(err=>{
      console.log(err);
      
    });
    this.gethot();
  },
  activated(){
    this.gethot();
  }
};
</script>
<style scoped lang="less">
h3{
  line-height: 45px;color:#2d2d2d;
  padding:1%; 
}
.hot-list{
  padding:1%;
  display: flex;
  flex-wrap: wrap;
  li{
    width:33.3333%;
    img{
      width:100%
    }
    span{color:#2a2a2a;display: inline-block;width:100%;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;text-align: center
    }
  }
}
</style>