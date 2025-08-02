import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'
// 首页-广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

// 首页-前台分类-小程序
// GET
// /home/category/mutli
// 小程序查询前台分类，只查询一级类目信息（此处pc和app、mini共用了一套前台类目信息）

export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

// 首页模块
// 首页-热门推荐-小程序
// GET
// /home/hot/mutli
// 请求参数

export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
