import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    needNewCode: 1,
    platform: 'h5'
  })
  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    needNewCode: 1,
    page: 'detail',
    platform: 'h5',
    topid,
    tpl: 3,
    type: 'top'
  })
  return jsonp(url, data, options)
}
