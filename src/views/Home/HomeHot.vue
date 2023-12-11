<script setup lang="ts">
import HomePinaso from './HomePinaso.vue'
import { getHotAPI } from '@/api/home.ts'
import { ref } from 'vue'
const hotList = ref([])
const getHotList = async () => {
  const res = await getHotAPI()
  // console.log(res)
  hotList.value = res.result
}
getHotList()
</script>

<template>
  <HomePinaso title="人气推荐" sub-title="新鲜出炉 品质靠谱">
    <template #default>
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture"  alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePinaso>
</template>
<style scoped lang='scss'>
.goods-list {
  display: flex;
  //justify-content: space-between;
  height: 406px;
  //border: 1px solid red;
  margin: 0;
  padding: 0;

  li~li{
    //border: 1px solid blue;
    margin-left: 10px;
  }

  li {
    width: 323px;
    height: 406px;
    list-style-type: none;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 323px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      //text-decoration: none;
    }

    .price {
      color: $priceColor;
    }
  }
}
a{
  text-decoration: none;
}
.name{
  margin: 0;
}
.price{
  margin: 0;
}
.desc{
  margin: 0;
}
</style>