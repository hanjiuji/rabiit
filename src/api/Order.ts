import http from "@/utils/axios.ts"

//获取订单
export const getUserOrder = (params) => {
    return http({
        url:'/member/order',
        method:'GET',
        params
    })
}