<script setup lang="ts">
import HomePanel from './HomePinaso.vue'
import { findNewAPI } from '@/api/home'
import { ref } from 'vue'
const newList = ref([])
const getNewList = async () => {
  const res = await findNewAPI()
  newList.value = res.result
}

getNewList()
</script>

<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <template #default>
      <ul class="goods-list">
        <li v-for="item in newList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;200</p>
          </RouterLink>
        </li>
      </ul>
    </template>
  </HomePanel>
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
</style>