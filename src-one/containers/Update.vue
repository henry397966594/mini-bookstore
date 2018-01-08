<template>
<div class="update">
    <header>
        <i @click="back"></i>
        修改
    </header>


     <ul class="form-list">
          <li>
            <label for="bookName">书名</label>
            <input type="text" placeholder="请输入书名" id="bookName" v-model="book.bookName">

          </li>
           <li>
            <label for="bookCover">书封面地址</label>
            <input type="text" placeholder="请输入封面" id="bookCover" v-model="book.bookCover">
            
          </li>
           <li>
            <label for="bookInfo">详细信息</label>
            <input type="text" placeholder="请输入书的详情" id="bookInfo" v-model="book.bookInfo">
            
          </li>
          <li>
            <button @click="update()">修改图书</button>
          </li>

        </ul>
</div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return {message:'hello',
        book: {
        bookName: "",
        bookCover: "",
        bookInfo: ""
      }
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        getbook(){
            axios.get('/api/book?id='+this.$route.params.id).then(res=>{
                this.book=res.data;
            })
        },
        update(){
            axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
                this.back();
            })
        }
    },
    components:{

    },
    created(){
        this.getbook()
    },
    activated(){
        this.getbook()
    }
}
</script>
<style scoped lang="less">
.update{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: #fff;
    z-index:999 ;
    header{
        height: 45px;
        line-height: 45px;
        background: #f1f1f1;
        display: flex;
        text-align: center;
        position: relative;
        justify-content: center;
        align-items: center;
        i{
            display: block;
            width:20px;
            height:20px;
            -webkit-transform-origin: center;
            transform:rotate(45deg);
             border:2px solid #ccc;
            border-top:0;
            border-right:0;
            position: absolute;
            left:20px;

        }

    }
}
.form-list {
  padding: 10px 30px;
  li {
    height: 65px;
    display: flex;
    flex-direction: column;
    input {
      margin-top: 5px;
      box-shadow: none;
      border: 1px solid #cccccc;
      height: 30px;
    }
    button {
      height: 35px;
    }
  }
}
</style>