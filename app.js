let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');
let {checkAPP, checkAdmin, checkUser} = require('./util/middleware')

// 引入路由
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
// 增加管理员路由
let adminRouter = require('./routes/admin')
// 创建实例
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 使用中间件
app.use('/', checkAPP,indexRouter);
app.use('/users', checkAPP, usersRouter);
app.use('/admin', [checkAPP, checkUser, checkAdmin], adminRouter)

// 设置允许跨域访问该服务
// 设置跨域访问
app.all('*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
