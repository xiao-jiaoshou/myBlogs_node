var express = require('express')
var router = express.Router()
// 引入处理逻辑的JavaScript文件
var {getNavMenu, getFooter, getLinks, getIndexPic, getHotArticle, 
  getNewArticle, getArticle, getArticleTalk, getArticles, viewArticle
} = require('../controller/getData')
const util = require('../util/common')


/* GET home page. */
// router.get('/getFooter', function(req, res, next) {
//   res.json(util.getReturnData(0, 'success'))
// });

// 获取菜单
router.get('/getNavMenu', getNavMenu)
// 获取getFooter显示内容
router.get('/getFooter', getFooter)
// 获取友情链接
router.get('/getLinks', getLinks)
// 获取首页轮播图图片
router.get('/getIndexPic', getIndexPic)
// 获取热点文章列表
router.get('/getHotArticle', getHotArticle)
// 获取最新的文章列表
router.get('/getNewArticle', getNewArticle)
// 获取文章的基本内容
router.get('/getArticle', getArticle)
// 获取文章评论
router.get('/getArticleTalk', getArticleTalk)
// 获取分类内容
router.get('/getArticles', getArticles)
// 获取浏览量
router.get('/viewArticle', viewArticle)

module.exports = router
