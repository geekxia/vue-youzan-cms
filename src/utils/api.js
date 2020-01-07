import fetch from './fetch'

// 用于获取商品列表
export function fetchGoodList(params) {
  // 返回Promise
  return fetch({
    method: "GET",
    params: params,
    url: '/youzan/getGoodList'
  })
}
