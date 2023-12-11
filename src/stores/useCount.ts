// 封装购物车模块

import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {delCartAPI, insertCartAPI, updataCart} from '@/api/ShoppingCart'
import {useUserStore} from "@/stores/user"


export const useCartStore = defineStore('cart', () => {
    const userStore=useUserStore();
    // 1. 定义state - cartList
    const cartList = ref([])
    const isLogin = computed(() => userStore.userInfo.token)
    // 2. 定义action - addCart
    const updateNewList=async ()=>{
        const res=await updataCart();
        cartList.value=res.result;
    }
    const addCart = async (goods) => {
        console.log('添加', goods)
        const { skuId, count } = goods
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        if (isLogin.value) {
            // 登录之后的加入购车逻辑
            await insertCartAPI({ skuId, count })
            console.log("添加到购物车")
            updateNewList();
            // updateNewList()
        } else {
            // 未登录
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                item.count++
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }
    }
    const clearCart=()=>{
        cartList.value=[];
    }
    /*const addCart = (goods) => {
        console.log('添加', goods)
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            // 找到了
            item.count++
        } else {
            // 没找到
            cartList.value.push(goods)
        }
    }*/
    // 删除
    const delCart = async (skuId) => {
        // 思路：
        // 1. 找到要删除项的下标值 - splice
        // 2. 使用数组的过滤方法 - filter
        if (isLogin.value) {
            // 调用接口实现接口购物车中的删除功能
            await delCartAPI([skuId])
            updateNewList()
        } else {
            // 思路：
            // 1. 找到要删除项的下标值 - splice
            // 2. 使用数组的过滤方法 - filter
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
    }
    // 切换选中的值
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    // 全选功能action
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }

    // 3. 已选择数量
    const selectedCount:Number = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    // 是否全选计算属性
    const isAll: Boolean = computed(() => cartList.value.every((item) => item.selected))
    // 总数量
    const allCount: Number = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))
    // 总价格
    const allPrice: Number = computed(() => cartList.value.reduce((sum, item) => sum + item.count * item.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart
    }
}, {
    persist: true,
})