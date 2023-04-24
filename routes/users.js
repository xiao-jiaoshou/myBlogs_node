var express = require('express');
var router = express.Router();
var {userLogin, userRegister} = require('../controller/user')
var {checkUser} = require('../util/middleware')
/* GET users listing. */
router.post('/login', userLogin)
router.post('/register', userRegister)
router.post('/login', userLogin)
router.use('/user', checkUser, require('./userNeedCheck'))

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
