var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json")
//连接数据库
var con=mysql.createConnection(dbconfig);
con.connect();

//用户注册
router.post('/user/reg', function(req, res, next) {
  var user_id =Math.floor( Math.random() * 100+ 201)
  var user_name = req.body.username;
  var user_password = req.body.password;
  var user_phone = req.body.phone;
  var create_time = new Date().toLocaleDateString();
  con.query("select * from user_info where user_phone=?", [user_phone], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result&&result.length !== 0) {
        res.send({ ok: false, msg: '此手机号已经注册！' });
      } else {
        con.query("insert into user_info(user_id,user_name,user_password,user_phone,create_time) values(?,?,?,?,?)", [user_id,user_name,user_password,user_phone,create_time], function (err, result) {
          if (err) {
            console.log(err);
          } else {
            res.send({ ok: true, msg: '注册成功' });
          }
        })
      }
    }
  })
});
//用户登录
router.post('/user/login', function (req, res) {
  var phone = req.body.phone;
  var password = req.body.password;
  con.query("select * from user_info where user_phone=? and user_password=?", [phone, password], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result&&result.length === 0) {
        res.send({ ok: false, msg: '登录失败' });
      }
      else {
        res.send({ ok: true, msg: result[0] });
      }
    }
  })
})
//获取用户信息
router.post('/user/message', function (req, res) {
  var userId=req.body.userId;
  var userMessage={};
  con.query("select count(*) as num from account_info where user_id=?", [userId], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result&&result.length === 0) {
        userMessage.num=0;
      }
      else {
        userMessage.num=result[0].num
        // res.send({ ok: true, msg: result[0] });
      }
    }
  })
  con.query("select * from user_info where user_id=?", [userId], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      if (result&&result.length === 0) {
        res.send({ ok: false, msg: "查询失败" });
      }
      else {
        var create_time=result[0].create_time;
        userMessage.create_time=create_time;
        res.send({ ok: true, msg: userMessage });
      }
    }
  })
})
module.exports = router;
