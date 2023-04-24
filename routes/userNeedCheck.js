var express = require('express')
var router = express.Router()

var {articleTalk} = require('../controller/userNeedCheck')
// 添加文章评论
router.post('/article/talk', articleTalk)
module.exports = router