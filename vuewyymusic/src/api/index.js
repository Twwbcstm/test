
import axios from 'axios'
import { artists, banner, baseUrl, homepage, lyric, newsong, personalized, playlist, singersong, songPlay, songurl, toplist, topsong, track,search } from './base'


export const ax = axios.create({
    baseURL:'/api',
    timeout:30000,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
})

/**
 * @param {object} params
 * @function getBanner
 * @description 可获取 banner( 轮播图 ) 数据可选参数 :type:资源类型,对应以下类型,默认为 0 即 PC
 * @returns {object}
 * 
 */
export const getBanner = (params)=>{
    return ax.get(baseUrl+banner,{
        params
    });
}


/**
 * @function getToplist
 * @description 获取所有榜单
 * @returns {object}
 */

export const getToplist = ()=>{
    return ax.get(baseUrl+toplist);
}

/**
 * @param {object} params
 * @function getSongplay
 * @description 获取播放音乐 对象参数：
 * 音乐 id
 * 播放音质等级 level, 
 * 分为 standard => 标准,
 * higher => 较高, 
 * exhigh=>极高, 
 * lossless=>无损,
 * jyeffect => 
 * 高清环绕声, 
 * sky => 沉浸环绕声, 
 * jymaster => 超清母带
 * @returns {object}
 */

export const getSongplay = (params)=>{
    return ax.get(baseUrl+songPlay,{
        params
    });
}

/**
 * @param {object} params
 * @function getLyric
 * @description 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
 * @returns {object}
 */

export const getLyric = (params)=>{
    return ax.get(baseUrl+lyric,{
        params
    });
}

/**
 * @param {boolean} refesh 是否刷新数据,
 * 默认为 false
 * cursor: 上一条数据返回的 cursor
 * @function getHomepage
 * @returns {object}
 */

export const getHomepage = (params)=>{
    return ax.get(baseUrl+homepage,{
        params
    });
}

/**
 * @param {number} type 必选参数 
 * 全部:0
 * 华语:7
 * 欧美:96
 * 日本:8
 * 韩国:16
 * @function getTopsong 说明 : 调用此接口 , 可获取新歌速递
 * @returns {object}
 */

export function getTopsong(params){
    return ax.get(baseUrl+topsong,{
        params
    });
}

/**
 * 推荐歌单
 * @param {number} limit limit: 取出数量 , 默认为 30 (不支持 offset)
 * @function getPersonalized
 * @returns {object}
 */

export function getPersonalized(params){
    return ax.get(baseUrl+personalized,{
        params
    });
}

/**
 * 推荐新音乐
 * @param {number} limit 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
 * @function getNewsong
 * @returns {object}
 */

export function getNewsong(params){
    return ax.get(baseUrl+personalized+newsong,{
        params
    })
}

/**
 * 热门歌手
 * @param {number} limit
 * @param {number} offset
 * @function getArtists
 * 可选参数 : limit: 取出数量 , 默认为 50
 * offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns {object}
 */
export function getArtists(params){
    return ax.get(baseUrl+artists,{
        params
    })
}

/**
 * 获取歌手单曲
 * @param {number} id
 * @function getSingersong
 * 说明 : 调用此接口 , 传入歌手 id, 
 * 可获得歌手部分信息和热门歌曲
 * 必选参数 : id: 歌手 id, 
 * 可由搜索接口获得
 * 接口地址 : /artists
 * 调用例子 : /artists?id=6452
 */
export function getSingersong(params){
    return ax.get(baseUrl+singersong,{
        params
    })
}

/**
 * 获取音乐
 * @param {number} id
 * @param {string} level
 * @function getSongurl
 * * 必选参数 : id : 音乐 id 
 * level: 播放音质等级, 分为 
 * standard => 标准,
 * higher => 较高, 
 * exhigh=>极高, 
 * lossless=>无损, 
 * hires=>Hi-Res, 
 * jyeffect => 高清环绕声, 
 * sky => 沉浸环绕声, 
 * jymaster => 超清母带
 * @returns {object}
 * 
 */
export const getSongurl = (params)=>{
    return ax.get(baseUrl+songurl,{
        params
    })
}

/**
 * 获取歌单所有歌曲
 * @param {number} id
 * @param {number} limit
 * @param {number} offset
 * @function getTrackall
 * 说明 : 由于网易云接口限制，歌单详情只会提供 10 首歌，通过调用此接口，传入对应的歌单id，即可获得对应的所有歌曲
 * 必选参数 : id : 歌单 id
 * 可选参数 : limit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
 * 可选参数 : offset : 默认值为0
 * 接口地址 : /playlist/track/all
 * 调用例子 : /playlist/track/all?id=24381616&limit=10&offset=1
 * @returns {object}
 */

export function getTrackall(params){
    return ax.get(baseUrl+playlist+track,{
        params
    })
}

/**
 * 搜索
 * @param {string} keywords 必选参数 : keywords : 关键词
 * @param {number} limit 可选参数 : limit : 返回数量 , 默认为 30 
 * @param {number} offset 可选参数 : 偏移数量，用于分页 ,
 * @function songSearch
 * @returns {object}
 */
export function songSearch(params){
    return ax.get(baseUrl+search,{
        params
    })
}