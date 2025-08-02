import type { BannerItem } from '@/types/home'
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
