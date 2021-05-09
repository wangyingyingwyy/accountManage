<template>
    <div id="yeardetails">
        <div class="head">
            <van-icon name="arrow-left" @click="cancel"/>
            <div class="title">
            {{this.$route.query.month}}月账单
            </div>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="godetaol(item.account_id)">
                  <div class="icon">
                     <van-icon name="balance-o" /> 
                  </div>
                  <div class="con">
                      <span class="time">
                          {{item.create_year+'年'+item.create_month+'月'+item.create_day+'日'}}
                          {{week[item.create_week]}}
                      </span>
                      <span class="details">
                          {{item.icon_name}}
                      </span>
                  </div>
                  <div class="money">
                      {{item.account_type=='income'?'+':''}}{{item.account_money}}
                  </div>
              </li>
          </ul>
    </div>
</template>

<script>
import './index.css'
import {getBillList} from '../../assets/js'
import { Button,Icon,Field,Dialog } from 'vant';
export default {
   components:{
       [Button.name]:Button,
       [Icon.name]:Icon,
       [Field.name]:Field,
       [Dialog.name]:Dialog,
   },
   data(){
       return {
        week:{1:'星期一',2:'星期二',3:'星期三',4:'星期四',5:'星期五',6:'星期六',0:'星期日'},
        list:[]
    }
   },
   created(){
       let userId=JSON.parse(localStorage.getItem('user')).userId;
            let param={
                billType:'month',
                userId,
                month:this.$route.query.month,
                year:this.$route.query.year 
            }
            getBillList(param).then(res=>{
                let data=res.data;
                if(data&&data.ok){
                    this.list = data.msg.dayBillList || [];
                    this.income = data.msg.income || "0.00";
                    this.pay = data.msg.outcome || "0.00";
                }
            })
   },
   methods:{
       godetaol(val){
            this.$router.push({path:'/details?id='+val})
        },
        cancel(){
           this.$router.go(-1)
       },
   },
}
</script>

<style>

</style>