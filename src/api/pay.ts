import request from '@/utils/axios.ts'

// 获取订单
export const getOrderAPI = (id) => {
    return request({
        url: `/member/order/${id}`
    })
}