var path = require("path");
var express = require("express");
var jwt = require('express-jwt');
var bodyParser = require('body-parser');
var tokenManager = require('./config/token_manager');
var secret = require('./config/secret');
//Routes
var routes = {};
routes.golds = require('./route/gold.js');
routes.users = require('./route/user.js');

var app = express();
var serverPort = process.env.PORT || 3000;
app.listen(serverPort, "0.0.0.0", function (err) { // 192.168.7.148
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:" + serverPort);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Logout
app.get('/user/logout', jwt({secret: secret.secretToken}), routes.users.logout); 

//用户登录
app.post('/user/signin', routes.users.signin); 

//创建新用户
app.post('/user/register', routes.users.register); 

//获取用户信息
app.post('/me', jwt({secret: secret.secretToken}), tokenManager.verifyToken, routes.users.me);

// 上传头像
app.post("/uploadImg", routes.golds.uploadImg);

// 美元指数查询
app.get('/usaMoney', routes.golds.usaMoney);

// 黄金价格查询
app.get('/auGold', routes.golds.auGold);

process.on('uncaughtException', function(err){
  console.log(err);
})

