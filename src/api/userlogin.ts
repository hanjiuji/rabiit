import  httpInstance  from '@/utils/axios'

// 登录
export const loginAPI=({ account, password })=>{
    return httpInstance({
        url:"/login",
        method:"POST",
        data:{
            account,
            password
        }
    })
}
// 渲染用户个人
export const getLikeListAPI = ({ limit = 4 }) => {
    return httpInstance({
        url:'/goods/relevant',
        params: {
            limit
        }
    })
}