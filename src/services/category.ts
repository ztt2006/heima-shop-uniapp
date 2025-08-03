import { http } from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'
// 分类列表-小程序
// GET
// /category/top

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
