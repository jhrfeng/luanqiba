var request = require('request');
var schedule = require('node-schedule');
var ali = require('../utils/ali');

var currentDate = new Date()

function scheduleCronstyle(){
    schedule.scheduleJob('3 * * * * *', function(){
        if(currentDate.getHours()>9 && currentDate.getHours()<16){
          console.log('scheduleCronstyle:' + currentDate.getHours());
        }
    }); 
}

scheduleCronstyle();

exports.usaMoney = function(req, res){
	request('http://web.juhe.cn:8080/finance/exchange/frate?type=&key=56070babcb424918dc9d62e3d276e432', function (error, response, body) {
      if (!error && response.statusCode == 200) {
      	res.send(body);
      }
    })
}

exports.auGold = function(req, res){
	request('http://web.juhe.cn:8080/finance/gold/shgold?v=&key=03d9124bc4287ec2bc732c55679ad705', function (error, response, body) {
      if (!error && response.statusCode == 200) {
      	res.send(body);
      }
    })
}

exports.uploadImg = function(req, res){
	var base64 = req.body.base;
	console.log(req.body)
  	ali.uploadFile(base64, "100.jpg", function(fileurl){
    	res.send(fileurl);
  	})
}