<template>
  <div id='account'>
    <div class="head">
      <h5>收支理财</h5>
      <van-icon name="user-o" @click="goSet"/>
    </div>
    <myset :showSet.sync='showSet'/>
      <div class="heads">
          <div class="account_time">
            <span :style="{'font-weight':billType=='year'?'bold':'normal'}" @click="change">年账单</span>
            <span>|</span>
            <span :style="{'font-weight':billType=='month'?'bold':'normal','margin-right':'20px'}" @click="change">月账单</span>
            <span class="account_money">收入</span>
            <span class="account_money">支出</span>
          </div>
          <div>
              <div class='showTime' @click="showPicker">{{year+'年 '}}{{billType=='month'?month+'月':''}}
                  <van-icon name="arrow-down" />
              </div>
              <div class="showMoney">
                  <span>+{{income}}</span>
                  <span>-{{pay}}</span>
                </div>
              <van-datetime-picker
                v-show="showYear"
                v-model="currentDate"
                type="year"
                title="选择年份"
                :min-date="minDate"
                :max-date="maxDate"
                :formatter="formatter"
                @confirm='okTime'
                @cancel='okTime'
              />  
            <van-datetime-picker
                v-show="showMonth"
                v-model="currentDate"
                type="year-month"
                title="选择年月"
                :min-date="minDate"
                :max-date="maxDate"
                :formatter="formatter"
                @confirm='okTime'
                @cancel='okTime'
              />          
          </div>
      </div>
      <div class="account_list">
          <ul v-if="billType=='month'">
              <li v-for="(item,index) in list" :key="index" @click="godetaol(item.account_id)">
                  <div class="icon">
                     <van-icon name="balance-o" @click="goSet"  /> 
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
                      {{item.account_type=='income'?'+':'-'}}{{item.account_money}}
                  </div>
              </li>
          </ul>
          <ul v-else>
              <li v-for="(item,index) in list" :key="index" @click="goYeardetaol(item)">
                  <div class="icon">
                     <van-icon name="balance-o" /> 
                  </div>
                  <div class="con">
                      <span class="time">
                          {{item.create_year+'年'+item.create_month+'月'}}
                      </span>
                      <span class="details">
                          {{item.create_month+'月账单'}}
                      </span>
                  </div>
                  <div class="money">
                      <span>{{'+'+item.income}}</span>
                      <span>{{'-'+item.outcome}}</span>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import {DatetimePicker,Icon} from 'vant'
import myset from '../setting/index'
import './index.css'
import {getBillList,setAccount} from '../../assets/js'
export default {
    components:{
     [DatetimePicker.name]:DatetimePicker,
     [Icon.name]:Icon,
     [Icon.name]:Icon,
     myset
    },
    data(){
        return{
            week:{1:'星期一',2:'星期二',3:'星期三',4:'星期四',5:'星期五',6:'星期六',0:'星期日'},
            billType:'month',
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            year:new Date().getFullYear(),
            month:new Date().getMonth()+1,
            showYear:false,
            showMonth:false,
            income:'0.00',
            pay:'0.00',
            showSet:false,
            list:[]
        }
    },
    created(){
        this.getlist()
    },
    methods:{
        getlist(){
            let userId=JSON.parse(localStorage.getItem('user')).userId;
            console.log(this.currentDate)
            let param={
                billType:this.billType,
                userId,
                month:this.month,
                year:this.year 
            }
            getBillList(param).then(res=>{
                let data=res.data;
                if(data&&data.ok){
                    if(this.billType=='year'){
                        this.list=data.msg.list || [];
                    }else{
                        this.list = data.msg.dayBillList || [];
                    }
                    this.income = data.msg.income || "0.00";
                    this.pay = data.msg.outcome || "0.00";
                }
            })
        },
        goSet() {
            this.showSet = true;
        },
        change(){
            
            if(this.billType=='month'){
                this.billType='year'
                this.year=new Date().getFullYear()
            }else{
                this.billType='month'
                this.month=new Date().getMonth()+1
            }
            this.showYear=false
            this.showMonth=false
            this.getlist()
        },
        formatter(type, val) {
        if (type === 'year') {
            this.year=Number(val);
            return `${val}年`;
        } else if (type === 'month') {
            this.month=Number(val)
            return `${val}月`;
        }
            return val;
        },
        showPicker(){
            if(this.billType=='month'){
                this.showMonth=true
            }else{
                this.showYear=true
            }
        },
        okTime(){
            this.showYear=false
            this.showMonth=false
            this.getlist()
        },
        godetaol(val){
            this.$router.push({path:'/details?id='+val})
        },
        goYeardetaol(item){
            this.$router.push({path:'/yeardetails?&month='+item.create_month+'&year='+item.create_year})
        }
    }
}
</script>

<style>
</style>