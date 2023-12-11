<script setup lang="ts">
import LayoutNav from './LayoutNav.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutFooter from './LayoutFooter.vue'
import LayoutHeaderUl from "./LayoutHeaderUl.vue";


defineOptions({
    name: "IndexI"
})

</script>
<template>
    <div>
        <LayoutNav />
        <LayoutHeader />
        <RouterView />
        <LayoutFooter />
        <LayoutHeaderUl/>
    </div>
</template>
<style scoped lang="scss">

</style>