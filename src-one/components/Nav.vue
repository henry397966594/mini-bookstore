<template>
  
      <nav>
          <router-link to="/home" >
              <i class="iconfont icon-homepage_fill"></i>
            <span>首页</span>
          </router-link>
           <router-link to="/list" >
              <i class="iconfont icon-liebiao"></i>
            <span>列表</span>
          </router-link>
           <router-link to="/add" >
              <i class="iconfont icon-addition_fill"></i>
            <span>添加</span>
          </router-link>
      </nav>
  
</template>
<script>
    export default{
        data(){
            return {msg:'hello'}
        },
        methods: {},
        components: {
            
        },
        computed:{}
    }
</script>
<style scoped lang="less">
nav{
    position: fixed;left:0;bottom: 0;width:100%;display: flex;height: 50px;
    border: 1px solid #cccccc; background: white;
    a{
         justify-content: center;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .router-link-active{
        color:orange
    }

}
</style>