import httpInstance from "@/utils/axios.ts"

// 获取首页的分类
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}