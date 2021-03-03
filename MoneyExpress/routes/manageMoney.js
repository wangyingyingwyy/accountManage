var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json")

var con=mysql.createConnection(dbconfig);
con.connect();
//理财分享
router.post('/manageMoneyShare', function (req, res) {
    var {
        title="",
        content="",
        author=""
    }=req.body;
    var article_id=Math.random() * 1000+ 1;
    var create_time=new Date().toLocaleDateString();
    var click_count=0;
    var follow=false;
    con.query("insert into manage_money_share(article_id,title,content,create_time,author,click_count,follow) values(?,?,?,?,?,?,?)", [article_id,title,content,create_time,author,click_count,follow], function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: false, msg: '分享失败' });
        } else {
          res.send({ ok: true, msg: '分享成功' });
        }
    })
})

//理财经验列表
router.get("/getShareList",function (req, res) {
    con.query("select * from manage_money_share", function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: true, msg: "查询失败" });
        } else if(result){            
            res.send({ ok: true, msg: result });
        }
      })
})
module.exports = router;
