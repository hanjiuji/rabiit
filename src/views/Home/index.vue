<script setup lang="ts">
import HomeCategory from './HomeCategory.vue'
import HomeBanner from './HomeBanner.vue'
import HomeNew from './HomeNew.vue'
import HomeHot from './HomeHot.vue'
import homeProduct from './HomeProduct.vue'
import {useUserStore} from "@/stores/user"
import HomePinaso from "@/views/Home/HomePinaso.vue";
defineOptions({
  name:"indexI"
})
const user=useUserStore();
// console.log(user.userInfo)
// console.log(user.count)
</script>
<template>
  <div class="father">
   <div class="bodw">
     <div class="bod">
       <HomeCategory />
       <HomeBanner />
     </div>
   </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
<!--    <HomePinaso title="新鲜好物" sub-title="新鲜好物 好多商品">-->
<!--        玛卡巴卡-->
<!--    </HomePinaso>-->
<!--    <HomePinaso title="人气推荐" sub-title="人气推荐 好多商品">-->
<!--      玛卡巴卡-->
<!--    </HomePinaso>-->
  </div>
</template>
<style scoped lang="scss">
.father{
  background-color: whitesmoke;
}
.bod{
  //border: 1px solid blue;
  position: relative;
  margin-left: 10%;
}
.bodw{
  display: flex;
}
</style>