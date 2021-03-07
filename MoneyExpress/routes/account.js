var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json")

var con=mysql.createConnection(dbconfig);
con.connect();

//收入支出记录
router.post("/account",(req,res) => {
    var {
        accountType="",
        accountMoney="",
        accountDetails="",
        accountIcon="",
        userName="",
        userId="",
    }=req.body;
    var account_id=Math.floor(Math.random() * 100+ 101);
    var create_time=new Date().toLocaleDateString();
    var create_year=new Date().getFullYear();
    var create_month=new Date().getMonth() + 1;
    var create_day=new Date().getDate();
    var create_week=new Date().getDay();
    con.query(`insert into account_info(account_id,user_id,user_name,account_type,account_money,account_details,account_icon,
        create_time,create_year,create_month,create_day,create_week) values(?,?,?,?,?,?,?,?,?,?,?,?)`, 
        [account_id,userId,userName,accountType,accountMoney,accountDetails,accountIcon,
        create_time,create_year,create_month,create_day,create_week], function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send({ ok: true, msg: '记录成功' });
        }
      })
})

//获取明细
router.post("/getAccountDetails",(req,res) => {
    var {
      accountId=""
    }=req.body;
    con.query("select * from account_info where account_id=?", [accountId], function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: true, msg: "查询失败" }); 
        } else if(result){            
          res.send({ ok: true, msg: result });
        }
      })
})
//删除明细
router.post("/deleteAccountDetails",(req,res) => {
  var {
    accountId=""
  }=req.body;
  con.query("delete from account_info where account_id=?", [accountId],(res,result)=>{
    if (err) {
      console.log(err);
      res.send({ ok: false,msg:'删除失败'});
    } else {
     res.send({ok:true,msg:"删除成功"})
    }
  })
})
//获取年账单或者月账单
router.post("/getBill",(req,res) => {
    var {
        billType="",
        userId="",
        month="",
        year=""
    }=req.body;
    if(billType == "month"){
      let billList=null;
      con.query(`select create_year,create_month,account_type,sum(account_money) as account_money,create_time
      from account_info where user_id=? and create_month=? and create_year=? 
      group by create_year,create_month,account_type`, [userId,month,year], function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: true, msg: "查询失败" });
        } else if(result){            
          billList=result;
        }
      })
      con.query(`select create_year,create_month,create_day,create_week,account_type,create_time
      from account_info where user_id=?`, [userId], function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: true, msg: "查询失败" });
        } else if(result){            
          billList.forEach((item)=>{
            let list=[];
            result.forEach(item2 =>{
              if(item2.create_year==item.create_year &&item2.create_month==item.create_month && item2.account_type==item.account_type){
                list.push(item2);
              }
            })
            item.dayBillList=list;
          })
          res.send({ ok: true, msg: billList });
        }
      })
    }else{
      let billList=null;
      con.query(`select create_year,account_type,sum(account_money) as account_money,create_time
                from account_info where user_id=? and create_year=? 
                group by create_year,account_type`,[userId,month], function (err, result) {
        if (err) {
          console.log(err);
          res.send({ ok: true, msg: "查询失败" });
        } else if(result){    
            billList=result;       
        }
      })
      con.query(`select account_type,create_year,create_month,sum(account_money) as account_money,create_time
            from account_info where user_id=?  
            group by create_year,create_month,account_type`,[userId], function (err, result) {
        if (err) {
        console.log(err);
        res.send({ ok: true, msg: "查询失败" });
        } else if(result){  
          billList.forEach((item)=>{
            let list=[];
            result.forEach(item2 =>{
              if(item2.create_year==item.create_year && item2.account_type==item.account_type){
                list.push(item2);
              }
            })
            item.monthBillList=list;
          })
          res.send({ ok: true, msg: billList });
        }
      })
    }
})
module.exports = router;
