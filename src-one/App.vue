<template>
    <div class="page">
      <transition name="move">
        <keep-alive>
       <router-view style="position :absolute; top:0;left:0;width:100%"></router-view>
      </keep-alive>
      </transition>
    
     
       <MNav></MNav>
    </div>
</template>
<script>
import MNav from './components/Nav'
export default {
  data() {
     return {
       msg: "hello"
    };
  },
  methods: {},
  components: {MNav},
  computed: {
      
  }
};
</script>
<style scoped>
/* 进入前的位置 */
.move-enter{
 transform: translateX(100%)
}
/* 激活的动画 */
.move-enter-active{
transition: all .4s
}
/* 离开的目的地和动画 */
.move-leave-active{
  transition: all .4s;
transform: translateX(-100%)
}
</style>