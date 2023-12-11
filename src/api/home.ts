import  httpInstance  from '@/utils/axios'

// 获取轮播图的图片
export function getBannerAPI (){
    return httpInstance({
        url:'home/banner'
    })
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return  httpInstance({
        url:"home/hot",
        method:"get"
    })
}
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}