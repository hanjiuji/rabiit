<script setup lang="ts">
import { getCategoryAPI } from "@/api/layout";
// 拿到默认的数据
import {ref} from "vue";

const head=ref([]);
const defte = async () => {
  const res= await getCategoryAPI();
  console.log(res);
  head.value=res.result;
}
defte();
</script>

<template>
<!--  左边分类-->
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in head" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <RouterLink v-for="i in item.children.slice(0, 2)" :key="i" to="/">{{ i.name }}</RouterLink>
        <!-- 弹层layer位置 -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <RouterLink to="/">
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ i.name }}
                  </p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped lang='scss'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  //border: 1px solid red;
  //padding: 0;
  //display: flex;
  //justify-content: center;

  .menu {
    margin: 0;
    margin-left: -11px;
    li {
      //padding-left: 40px;
      height: 55px;
      line-height: 55px;
      list-style-type: none;

      &:hover {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;
        text-decoration: none;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        //width: 990px;
        width: 1200px;
        height: 500px;
        background: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        //border: 1px solid red;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 18px;
          //80px

          small {
            font-size: 16px;
            color: #666;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          //border: 1px solid blue;
          margin: 0;
          margin-left: -36px;

          li {
            width: 330px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            //border: 1px solid red;
            //#eee
            border-radius: 4px;
            background: #fff;
            list-style-type: none;
            //text-decoration: none;
            //display: flex;
            //flex-wrap: wrap;
            //justify-content: center;
            //border: 1px solid red;

            &:nth-child(3n) {
              margin-right: 0;
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              //padding: 10px;
              //border: 1px solid pink;
              //text-decoration: none;

              &:hover {
                background: #e3f9f4;
              }

              img {
                width: 95px;
                height: 95px;
                //float: left;
              }

              .info {
                //padding-left: 10px;
                //width: 100px;
                line-height: 24px;
                overflow: hidden;
                //border: 1px solid red;
                //float: left;
                height: 100%;
                //padding: 10px 0;

                .name {
                  font-size: 16px;
                  color: #666;
                  margin: 5px;
                }

                .desc {
                  color: #999;
                  margin: 5px;
                  font-size: 13px;
                }

                .price {
                  font-size: 16px;
                  color: $priceColor;
                  margin: 5px;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      // 关键样式  hover状态下的layer盒子变成block
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>