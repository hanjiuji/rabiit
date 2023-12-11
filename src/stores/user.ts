// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/api/userlogin'
import {useCartStore} from "./useCount"

export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    const count=ref(0)
    const Cart=useCartStore();
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        console.log("发送请求之前",userInfo.value)
        const res = await loginAPI({ account, password })
        console.log("查看res",res)
        userInfo.value = res.result
        console.log("修改后",userInfo.value)
    }
    const clearUserInfo = () => {
        userInfo.value = {}
        Cart.clearCart()
    }
    return {
        userInfo,
        getUserInfo,
        count,
        clearUserInfo
    }
},{
    persist: true,
})