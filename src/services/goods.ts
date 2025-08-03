// 商品详情
// GET
// /goods
// 规格集合一定要和skus集合下的specs 顺序保持一致

import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
