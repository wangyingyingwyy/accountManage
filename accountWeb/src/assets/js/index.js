import axios from 'axios'

const payList=[{type:1,icon:'餐饮',path:'pay/1canyin.png'},
{type:2,icon:'服饰',path:'pay/1fushi.png'},
{type:3,icon:'购物',path:'pay/1gouwu.png'},
{type:4,icon:'交通',path:'pay/1jiaotong.png'},
{type:5,icon:'零食',path:'pay/1lingshi.png'},
{type:6,icon:'美容',path:'pay/1meirong.png'},
{type:7,icon:'日用',path:'pay/1riyong.png'},
{type:8,icon:'蔬菜',path:'pay/1shucai.png'},
{type:9,icon:'水果',path:'pay/1shuiguo.png'},
{type:10,icon:'通讯',path:'pay/1tongxun.png'},
{type:11,icon:'娱乐',path:'pay/1yule.png'},
{type:12,icon:'运动',path:'pay/1yundong.png'},
// {type:13,icon:'其他',path:'pay/1qita.png'},
]
const incomeList=[{type:1,icon:'礼金',path: 'income/1lijin.png'},
{type:2,icon:'工资',path:'income/1gongzi.png'},
{type:3,icon:'兼职',path:'income/1jianzhi.png'},
{type:4,icon:'理财',path:'income/1licai.png'},
{type:5,icon:'其他',path:'income/1qita.png'},
]

const URL='/api'
//登录
function loginFun(data){
  return new Promise ((resolve)=>{
    axios.post(URL + '/user/login',data)
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//注册
function registerFun(data){
  return new Promise ((resolve)=>{
    axios.post(URL + '/user/reg',data)
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//获取用户信息/api/user/message
function getUserMsg(userId){
    return new Promise ((resolve)=>{
    axios.post(URL + '/user/message',
      {
        userId:userId
      })
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//获取账单

function getBillList(data){
  return new Promise ((resolve)=>{
    axios.post(URL + '/getBill',data)
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//收支记录
function setAccount(data){
  return new Promise ((resolve)=>{
    axios.post(URL + '/account ',data)
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//收支记录详情
function getAccountDetails(accountId){
  return new Promise ((resolve)=>{
    axios.post(URL + '/getAccountDetails ',{
      accountId:accountId
    })
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//理财分享列表
function getShareList(userId){
  return new Promise ((resolve)=>{
    axios.get(URL + '/getShareList',{
      userId:userId
    }).then(res =>{
          resolve(res);
      })
      .catch(function (error) {
        console.log(error);
      });
    })
}
//理财分享
function setShare(data){
  return new Promise ((resolve)=>{
    axios.post(URL + '/manageMoneyShare',data)
      .then(res =>{
          resolve(res);
        })
      .catch(function (error) {
        console.log(error);
      });
    })
}
export {
    incomeList,
    payList,
    getUserMsg,
    registerFun,
    loginFun,
    getBillList,
    setAccount,
    getAccountDetails,
    getShareList,
    setShare
}