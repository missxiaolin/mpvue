import request from 'utils/request'

export function timeBanner () {
  let params = {}
  return request.post(`/advert/time/banner`, params)
}
