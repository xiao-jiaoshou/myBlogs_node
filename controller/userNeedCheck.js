let redis = require('../util/redisDB')
const util = require('../util/common')
// 文章评论
exports.articleTalk = (req, res, next) => {
    if('a_id' in req.body.talk && 'talk' in req.body){
        // 组织字符串
        let talk = {
            talk: req.body.talk,
            time: Date.now(),
            username: req.username
        }
        let key = req.headers.fapp + ':article:' + req.body.a_id + ':talk' + req.body
        redis.get(key).then((data) => {
            let tData = []
            if(data){
                tData = data
            } else {
                tData.push(talk)
            }
            redis.set(key, tData)
            res.json(util.getReturnData(0, '评论成功'))
        })
    } else {
        res.json(util.getReturnData(1, '评论错误'))
    }
}