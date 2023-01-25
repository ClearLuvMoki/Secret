/**
 * Author: Moki
 * Date: 2023-01-22
 * FileName: 外部API
 **/

/**
 * Author: Moki
 * Date: 2023-01-22
 * Todo: 获取每日一言
 **/
export const getHitokoto = async () => {
    return fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
}

/**
 * Author: Moki
 * Date: 2023-01-22
 * Todo: 获取每日一句诗词
 **/
export const getShici = async () => {
    return fetch('https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=e6JJEa8%2BTqU%2BKdJ21H0MsgXaZU7m%2B%2F9u', {
        method: "get"
    })
        .then(response => response.json())
}

/**
 * Author: Moki
 * Date: 2023-01-22
 * Todo: 随机获取每日一图
 **/
export const getImageByRandom = () => {
    return fetch('https://source.unsplash.com/user/erondu/1600x900')
}
