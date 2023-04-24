var express = require('express')
var router = express.Router()
// 引入处理逻辑的JavaScript文件
var {getNavMenu, getFooter, getLinks, getIndexPic} = require('../controller/getData')
const util = require('../util/common')


/* GET home page. */
router.get('/getFooter', function(req, res, next) {
  res.json(util.getReturnData(0, 'success'))
});

// 获取菜单
router.get('/getNavMenu', getNavMenu)
// 获取getFooter显示内容
router.get('/getFooter', getFooter)
// 获取友情链接
router.get('/getLinks', getLinks)
// 获取首页轮播图图片
router.get('/getIndexPic', getIndexPic)

module.exports = router
