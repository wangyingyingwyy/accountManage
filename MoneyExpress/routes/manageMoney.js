var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json")

var con=mysql.createConnection(dbconfig);
con.connect();
//理财分享
router.post('/manageMoneyShare',(req,res) => {
    var {
        title="",
        content="",
        author="",
        author_id=""
    }=req.body;
    console.log(author_id)
    var article_id=Math.floor(Math.random() * 100+ 1);
    var create_time=new Date().toLocaleDateString();
    con.query("insert into manage_money_share(article_id,title,content,create_time,author,author_id) values(?,?,?,?,?,?)", [article_id,title,content,create_time,author,author_id], function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: false, msg: '分享失败' });
        } else {
          res.send({ ok: true, msg: '分享成功' });
        }
    })
})

//理财经验列表
router.get("/getShareList",(req,res) => {
    con.query("select * from manage_money_share", function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: true, msg: "查询失败" });
        } else if(result){            
            res.send({ ok: true, msg: result });
        }
      })
})


//关注用户

router.post("/followAuthor",(req,res) => {
  var {
    currentAuthor="",
    followAuthor=""
  }=req.body;
  var id=Math.floor(Math.random() * 100+ 301);
  var create_time=new Date().toLocaleDateString();
  con.query("select * from follow_info where current_id=? and follow_id=?",[currentAuthor,followAuthor],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      if(result&&result.length>0){
        res.send({ok:true,msg:"你已经关注过此用户"})
      }else{
        con.query("insert into follow_info(id,current_id,follow_id,create_time) values(?,?,?,?)", [id,currentAuthor,followAuthor,create_time],  (err,followRes) =>{
          if (err) {
            console.log(err);
            res.send({ ok: false,msg:'关注失败'});
          } else {
            con.query("select * from manage_money_share where author_id=?",[followAuthor],(error,followResult) => {
              if(error){
                console.log(error);
                res.send({ ok: false, msg: '查询失败' });
              }else{
                res.send({ ok: true, msg: followResult});
              }
            })
          }
      })
      }
    }
  })
})

//取消关注
router.post("/cancelFollowAuthor",(req,res) => {
  var {
    currentAuthor="",
    followAuthor=""
  }=req.body;
  con.query("select * from follow_info where current_id=? and follow_id=?",[currentAuthor,followAuthor],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      if(result&&result.length<=0){
        res.send({ok:true,msg:"你暂未关注此用户,无法取消"})
      }else{
        var id=result[0].id;
        con.query("delete from follow_info where id=?", [id],  (err,followRes) =>{
          if (err) {
            console.log(err);
            res.send({ ok: false,msg:'取关失败'});
          } else {
            con.query("select * from manage_money_share where author_id=?",[followAuthor],(error,followResult) => {
              if(error){
                console.log(error);
                res.send({ ok: false, msg: '查询失败' });
              }else{
                res.send({ ok: true, msg: followResult});
              }
            })
          }
      })
      }
    }
  })
})
module.exports = router;
