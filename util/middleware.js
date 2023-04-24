// 存放用户状态判定
const {ALLOW_APP} = require('../config/app')
const util = require('./common')
exports.checkAPP = (req, res, next) => {
    console.log(req.headers)
    if(!ALLOW_APP.includes(req.headers.fapp)){
        res.json(util.getReturnData(500, "来源不正确"))
    }else{
        next()
    }
}
exports.checkUser = (req, res, next) => {
    console.log('检测用户登录情况')
    next()
}
exports.checkAdmin = (req, res, next) => {
    console.log('检测管理员账户')
    if(req.username == 'admin'){
        // 如果是管理员，则在Redis中增加一个power
        let key = req.headers.fapp + ":user:power:" + req.headers.token
        redisConfig.set(key, 'admin')
        next()
    } else {
        res.json(util.getReturnData(403, '权限不足'))
    }
}