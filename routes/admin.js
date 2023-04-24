var express = require('express')
var router = express.Router()

var { setArticle } = require('../controller/admin')

router.post('/setArticle', setArticle)
module.exports = router