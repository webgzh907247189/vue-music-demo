import axios from 'axios'
let baseUrl = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
let requestUrl = '/api/banner'

let config = {
    _: 1554041204358,
    g_tk: 121530034,
    uin: 907247189
}

let dataConfig = {
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1
}

function getBaner(url){
    return axios.get(url)
}
export {getBaner,baseUrl,config,dataConfig,requestUrl}