<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})

</script>


<template>
<!--  组件-->
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
      <slot />
    </div>
  </div>
</template>


<style scoped lang='scss'>
.home-panel {
  background-color: #fff;
  //border: 1px solid red;
  //display: flex;
  //justify-content: center;
  margin-top: 17px;
  .container{
    //border: 1px solid blue;
    margin-left: 10%;
  }
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    margin: -15px 0;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>