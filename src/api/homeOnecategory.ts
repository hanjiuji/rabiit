import  httpInstance  from '@/utils/axios'
// 1级路由
export const getTopCategoryAPI = (id) => {
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}
// 获取轮播图
export function getBannerAPI (params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}