<script setup lang="ts">
import HomePanel from './HomePinaso.vue'
import {getGoodsAPI} from '@/api/home'
import {ref} from 'vue'

const goodsProduct = ref([
  {
    "id": "1005000",
    "name": "居家",
    "picture": "https://yanxuan-item.nosdn.127.net/01227c93e9098342be591ea57b8953c7.jpg?quality=95&thumbnail=610x610&imageView",
    "saleInfo": "全场3件8折",
    "children": [{"id": "1005999003", "name": "居家生活用品", "layer": 2, "parent": null},
      {"id": "1008017", "name": "收纳", "layer": 2, "parent": null}, {
        "id": "1017000",
        "name": "宠物食品",
        "layer": 2,
        "parent": null
      }, {"id": "109243003", "name": "艺术藏品", "layer": 2, "parent": null}, {
        "id": "109248004",
        "name": "宠物用品",
        "layer": 2,
        "parent": null
      }, {"id": "109293000", "name": "家庭医疗", "layer": 2, "parent": null}, {
        "id": "109308000",
        "name": "中医保健",
        "layer": 2,
        "parent": null
      }],
    "goods": [{
      "id": "4001920",
      "name": "朱炳仁铜·猫型吉祥物装饰工艺摆件",
      "desc": "灵性十足的黑色招财猫，周而复始，财源不断",
      "price": "1888.00",
      "picture": "https://yanxuan-item.nosdn.127.net/6e38fc94a8fe72c9d139bc48ba6d9814.jpg",
      "orderNum": 937
    }]
  }
    ]);
const getGoods = async () => {
  const {result} = await getGoodsAPI()
  console.log(result);
  goodsProduct.value = result
}
getGoods();
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <!--        1423-->
      <div class="box">
        <RouterLink class="cover" to="/">
          <img :src="cate.picture"/>
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <RouterLink to="/" class="goods-item">
              <div class="box2">
                <img :src="good.picture" alt=""/>
                <div class="box3">
                  <p class="name ellipsis">{{ good.name }}</p>
                  <p class="desc ellipsis">{{ good.desc }}</p>
                  <p class="price">&yen;{{ good.price }}</p>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </HomePanel>
    123
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;

  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background: $xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;
    //border: 1px solid red;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 1200px;
      display: flex;
      flex-wrap: wrap;
      //border: 1px solid blue;

      li {
        width: 248px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        list-style-type: none;
        //border: 1px solid red;
        //position: relative;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      //width: 220px;
      width: 100%;
      height: 280px;
      padding-bottom: 10px;
      //padding: 20px 30px;
      text-align: center;
      transition: all .5s;
      //border: 1px solid blue;
      padding-top: 10px;

      &:hover {
        transform: translate3d(0, -1px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        border-radius: 10px;
      }
      .box3{
        //border: 1px solid red;
        height: 130px;
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
          margin: 5px;
        }
      }

      img {
        width: 160px;
        height: 160px;
      }

      p {
        //padding-top: 10px;
      }

      .name {
        font-size: 16px;
        //border: 1px solid blue;
        //margin: 0;
        //margin-bottom: 0;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .desc {
        color: #999;
        height: 29px;
        width: 100%;
        //border: 1px solid blue;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        //margin: 2px;
        //margin-top: 5px;
        //margin-bottom: 0;
      }

      .price {
        color: $priceColor;
        font-size: 20px;
        text-overflow: ellipsis;
        //margin-top: 3px;
      }
    }
  }
}
a{
  text-decoration: none;
  width: 100%;
  height: 100%;
  //display: none;
}
</style>