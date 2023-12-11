import  httpInstance  from '@/utils/axios'
// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}
// 跟新购物车
export const updataCart = () => {
    return httpInstance({
        url: '/member/cart',
    })
}

// 删除购物车
export const delCartAPI = (ids) => {
    return httpInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}