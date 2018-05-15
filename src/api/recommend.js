import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    categoryId: 10000000,
    ein: 29,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    picmid: 1,
    rnd: Math.random(),
    sin: 0,
    sortId: 5,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((e) => {
    console.log(e)
  })
}

export function getSongList(disstid) {
  const url = '/api/getCdInfo'
  const data = Object.assign({}, commonParams, {
    disstid,
    hostUin: 0,
    json: 1,
    needNewCode: 0,
    onlysong: 0,
    platform: 'yqq',
    type: 1,
    utf8: 1,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((e) => {
    console.log(e)
  })
}
