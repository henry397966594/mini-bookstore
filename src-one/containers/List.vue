<template>
    <div class="page">
      <MHeader title="列表页"></MHeader>
      <div class="scroll-content" v-if="books.length">
        <ul class="list">
        <li v-for="(book,index) in books" :key="index">
          <img :src="book.bookCover" alt="">
          <div>
          <h3>{{book.bookName}}</h3>
          <p>{{book.bookInfo}}</p>
          <div class="btn-list">
            <button @click="remove(book.id)">删除</button>
            <router-link tag="button"  :to="{name:'update',params:{id:book.id}}">
            修改
            </router-link>
          
          </div>
          
        </div>
        </li>
        
      </ul>
      </div>
      
      <Loading v-else></Loading>
    </div>
</template>
<script>
import MHeader from "../components/Header";
import axios from "axios";
import Loading from '../components/Loading'
export default {
  data() {
    return {
      msg: "hello",
      books: []
    };
  },
  methods: {
    getbooks() {
      axios.get("/api/book").then(res => {
        setTimeout(() => {
          this.books = res.data;
        }, 2500);
        
      });
    },
    remove(id){
      axios.delete('/api/book?id='+id).then(res=>{
       this.books= this.books.filter(item=>item.id!=id)
      })
    }
  },
  components: { MHeader,Loading },
  computed: {},
  created() {
    this.getbooks();
  },
  activated () {
    this.getbooks();// 重新获取数据
  }
};
</script>
<style scoped lang="less">
.list{
  margin: 10px 3%;
 
  li{
    padding: 20px 0;
    border-bottom: 1px solid #cccccc;
    display: flex;
    img{
      width: 120px;
      height: 120px;
    }
    div{
      display: flex;
      flex-direction: column;
      margin-left: 15px;
       .btn-list{
         margin-left:0px;
      display: flex;
      flex-direction: row;
     
      
      button{
        display: inline-block;
        margin-right:20px;
        width:50px;height:30px;
      }
    }
      h3{
        flex: 1;
       padding-top: 15px;
      }
      p{
        font-size: 12px;
        color:#ccc;
        flex: 1;
      }
    }
   
  }
}
</style>