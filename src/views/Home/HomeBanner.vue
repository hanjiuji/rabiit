<script setup lang="ts">
import { getBannerAPI } from "@/api/home.ts";
import {ref} from "vue";

const pic=ref([]);
const defut=async ()=>{
  const res=await getBannerAPI();
  console.log(res);
  pic.value=res.result;
}
defut();

</script>



<template>
<!--  轮播图-->
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in pic" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1320px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>