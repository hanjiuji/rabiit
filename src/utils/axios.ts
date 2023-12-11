// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import {useRouter} from "vue-router";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 拦截器
// const user=useUserStore()
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    // 1. 从pinia获取token数据
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const router = useRouter()
    const user=useUserStore()
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    if (e.response.status===401){
        user.clearUserInfo()
        router.push("/login")
        // return
    }
    return Promise.reject(e)
})


export default httpInstance