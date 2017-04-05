var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');
var request = require('request');
var ali = require('./utils/ali');

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

// token权限验证
app.post("/authenticate", function(req, res){
  User.findOne({mobile:req.body.mobile, password:req.body.password}, function(err, user){
    if(err){
      res.json({
        type: false,
        data: "Error"+err
      });
    }else{
      if(user){
        res.json({
          type: true,
          data: user,
          token: user.token
        })
      }else{
        res.json({
          type: false,
          data: "Incorrect mobile/passwprd"
        });
      }
    }
  })
});

// 注册用户
app.post("/signin", function(req, res){
  User.findOne({mobile:req.body.mobile, password:req.body.password}, function(err, user){
    if(err){
      res.json({
        type: false,
        data: "Error"+err
      });
    }else{
      if(user){
        res.json({
          type: false,
          data: "User already exist!"
        })
      }else{
        var userModel = new User();
        userModel.mobile = req.body.mobile;
        userModel.password = req.body.password;
        userModel.save(function(err, user){
          user.token = jwt.sign(user, process.env.JWT_SECRET);
          user.save(function(err, user1){
            res.json({
              type: true,
              data: user1,
              token: user1.token
            });
          })
        })
      }
    }
  })
});

// 获取当前用户信息
app.get('/me', ensureAutorized, function(req, res){
  User.findOne({token: req.token}, function(err, user){
    if(err){
      res.json({
        type: false,
        data: "Error"+err
      });
    }else{
      res.json({
        type: true,
        data: user
      });
    }
  });
});

function ensureAuthorized(req, res, next){
  var bearerToken;
  var bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== 'undefined'){
    var bearer = bearerHeader.split(" ");
    bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }else{
    res.send(403);//如果 token 不存在，你会得到一个 403（Forbidden）返回
  }
}

// 上传头像
app.post("/uploadImg", function(req, res){
  var base64 = req.body.base;
  console.log(req.body)
  ali.uploadFile(base64, "100.jpg", function(fileurl){
    res.send(fileurl);
  })
});


// 美元指数查询
app.get('/usaMoney', function (req, res) {
    request('http://web.juhe.cn:8080/finance/exchange/frate?type=&key=56070babcb424918dc9d62e3d276e432', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
});

// 黄金价格查询
app.get('/auGold', function (req, res) {
    request('http://web.juhe.cn:8080/finance/gold/shgold?v=&key=03d9124bc4287ec2bc732c55679ad705', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
});

process.on('uncaughtException', function(err){
  console.log(err);
})

