<script setup>
defineProps({
  goods: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {
      desc:"小巧便携，三轴防抖，模式随心选",
      id: "3996603",
      name:"飞宇出游拍摄防抖神器手机稳定器",
      orderNum:368,
      picture:
          "https://yanxuan-item.nosdn.127.net/2d0a47a51fa4b3e3857f2010bd83bead.jpg",
      price:
          "439.00"
    }
  }
})
</script>

<template>
  <RouterLink to="/" class="goods-item">
<!--    {{ goods }}-->
    <img :src="goods.picture" alt="..."/>
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>


<style scoped lang="scss">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}

a {
  text-decoration: none;
}
</style>