/**
 * 接口基本地址
 */
export const baseUrl = 'https://autumnfish.cn'

/**
 * @param {string} type 数据可选参数 对应以下类型,默认为 0 即 PC
 * 调用此接口 , 可获取 banner( 轮播图 ) 数据可选参数 :type:资源类型,对应以下类型,默认为 0 即 PC
 */
export const banner = '/banner'

/**
 * @param {string} id 
 * 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
 */
export const lyric = '/lyric'

/**
 * @param {string} keywords 必选参数
 * @param {string} limit 可选参数
 * @param {string} offset 可选参数
 * @param {string} type 可选参数 默认为 1
 * 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
 * 必选参数 : keywords : 关键词
 * 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
 * 接口地址 : /search 或者 /cloudsearch(更全)
 * 调用例子 : /search?keywords=海阔天空 /cloudsearch?keywords=海阔天空
 */
export const search = '/cloudsearch'


/**
 * 所有榜单
 * 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
 * 调用例子 : /toplist
 * @param {string} toplist
 */
export const toplist = '/toplist'

/**
 * @param {number} id  音乐 id
 * @param {string} level  播放音质等级, 分为 standard => 标准,higher => 较高, exhigh=>极高, lossless=>无损,jyeffect => 高清环绕声, sky => 沉浸环绕声, jymaster => 超清母带
 */
export const songPlay = '/song/url/v1'


/**
 * @param {string} homepage
 *  调用此接口 , 可获取 APP 首页信息
 */
export const homepage = '/homepage/block/page'

/**
 * 新歌速递
 * @param {string} topsong 调用此接口 , 可获取新歌速递
 * 
 */

export const topsong = '/top/song'

/**
 * 推荐歌单
 * 说明 : 调用此接口 , 可获取推荐歌单
 * @param {string} personalized limit: 取出数量 , 默认为 30 (不支持 offset)
 */

export const personalized = '/personalized'

/**
 * 推荐新音乐
 * @param {string} newsong 说明 : 调用此接口 , 可获取推荐新音乐
 * 可选参数 : limit: 取出数量 , 默认为 10 (不支持 offset)
 */
export const newsong = '/newsong'

/**
 * @param {string} playlist
 * 歌单分类
 * 说明 : 调用此接口,可获取歌单分类,包含 category 信息
 * @param {string} catlist
 * 热门歌单分类
 * 说明 : 调用此接口,可获取歌单分类,包含 category 信息
 * @param {string} hot
 * 
 */
export const playlist = '/playlist'
export const catlist = '/catlist'
export const hot = '/hot'
export const track = '/track/all'

/**
 * 热门歌手
 * @param {string} artists
 * 说明 : 调用此接口 , 可获取热门歌手数据
 * 可选参数 : limit: 取出数量 , 默认为 50
 * offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * 接口地址 : /top/artists
 * 调用例子 : /top/artists?offset=0&limit=30
 * 
 */
export const artists = '/top/artists'

/**
 * 获取歌手单曲
 */
export const singersong = '/artists'


/**
 * 获取音乐 url
 * @param {number} id
 * 必选参数 : id : 音乐 id 
 * level: 播放音质等级, 分为 
 * standard => 标准,
 * higher => 较高, 
 * exhigh=>极高, 
 * lossless=>无损, 
 * hires=>Hi-Res, 
 * jyeffect => 高清环绕声, 
 * sky => 沉浸环绕声, 
 * jymaster => 超清母带
 */

export const songurl = '/song/url'