import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'
  const data = Object.assign({}, commonParams, {
    format: 'jsonp',
    hostUin: 0,
    needNewCode: 0,
    pcachetime: new Date(),
    platform: 'yqq',
    songmid: mid
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
