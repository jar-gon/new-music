import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    needNewCode: 1,
    platform: 'h5'
  })
  return jsonp(url, data, options)
}
export function search(query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = Object.assign({}, commonParams, {
    aggr: 0,
    catZhida: zhida ? 1 : 0,
    flag: 1,
    ie: 'utf-8',
    n: perpage,
    needNewCode: 1,
    p: page,
    perpage,
    platform: 'h5',
    remoteplace: 'txt.mqq.all',
    sem: 1,
    t: 0,
    w: query,
    zhidaqu: 1
  })
  return jsonp(url, data, options)
}
