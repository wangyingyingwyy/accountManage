var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json")

var con=mysql.createConnection(dbconfig);
con.connect();

// //用户注册
// router.post('/user/reg', function(req, res, next) {
 
// });
module.exports = router;
