var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');
var request = require('request');
var ali = require('./utils/ali');

var app = express();
var serverPort = process.env.PORT || 3000;
app.listen(serverPort, "192.168.7.148", function (err) {
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

// 上传头像
app.post("/uploadImg", function(req, res){
  var base64 = req.body.base;
  console.log(req.body)
  ali.uploadFile(base64, "100.jpg", function(fileurl){
    res.send(fileurl);
  })
})


// 查询字母接口
app.post("/queryEnglish", function(req, res) { 
    console.log(req.body);
    var obj = req.body;
    var english = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var reslish = [];
    if(''==obj['search'] || null==obj['search'])
      res.send(english);
    else{
      reslish.push(obj['search'])
      res.send(reslish);
    }
});

// 接口，返回24个字母列表
app.get('/englishList', function(req, res){
    var english = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    res.send(english);
})

// 查询字母接口
app.post("/queryEnglish", function(req, res) { 
    console.log(req.body);
    var obj = req.body;
    var english = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var reslish = [];
    if(''==obj['search'] || null==obj['search'])
      res.send(english);
    else{
      reslish.push(obj['search'])
      res.send(reslish);
    }
});

// 加载更多 翻页
app.post("/nextPage", function(req, res) {
    var obj = req.body;
    console.log(obj)
    var english = {
      "1": ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      "2": ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
      "3": ['o', 'p', 'q', 'r', 's', 't', 'u']
    };
    if(obj["pageIndex"] == "1"){ // 返回第一页的内容
      res.send(english["1"]);
    }else if(obj["pageIndex"] == "2"){ // 返回第二页的内容
      res.send(english["2"]);
    }else if(obj["pageIndex"] == "3"){ // 返回第三页的内容
      res.send(english["3"]);
    }    

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



