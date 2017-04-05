var path = require("path");
var express = require("express");
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var serverPort = process.env.PORT || 3000;
app.listen(serverPort, "0.0.0.0", function (err) { // 192.168.7.148
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:" + serverPort);
});

// 跨域处理
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 第三方查询
app.get('/entry', function(req, res){
	var reqUrl = "http://open.qyer.com/qyer/recommands/entry?client_id=qyer_ios&client_secret=cd254439208ab658ddf9&count=20&lat=22.53817959930097&lon=113.9401406127727&page=1&track_app_channel=App%2520Store&track_app_version=6.4&track_device_info=iPhone5%2C3&track_deviceid=F22C25A1-139E-4878-AAA8-0D2D26FFB021&track_os=ios%25208.4&v=1&callback=JSONP_CALLBACK";
      request(reqUrl, function (error, response, body) {
        console.log(body);
        res.send(body);
      });
});

