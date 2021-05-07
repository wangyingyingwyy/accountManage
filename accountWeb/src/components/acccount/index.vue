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
                  <span>{{income}}</span>
                  <span>{{pay}}</span>
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
          <ul>
              <li v-for="(item,index) in list" :key="index" @click="godetaol(123456)">
                  <div class="icon">
                     <van-icon name="balance-o" @click="goSet"  /> 
                  </div>
                  <div class="con">
                      <span class="time">
                          {{item.dayBillList[0].create_year+'年'+item.dayBillList[0].create_month+'月'+item.dayBillList[0].create_day+'日'}}
                          {{week[item.dayBillList[0].create_week]}}
                      </span>
                      <span class="details">
                          11111111111111111111111111111111111
                      </span>
                  </div>
                  <div class="money">
                      {{item.account_type=='income'?'+':'-'}}{{item.account_money}}
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
export default {
    components:{
     [DatetimePicker.name]:DatetimePicker,
     [Icon.name]:Icon,
     [Icon.name]:Icon,
     myset
    },
    data(){
        return{
            week:{1:'星期一',2:'星期二',3:'星期三',4:'星期四',5:'星期五',6:'星期六',7:'星期日'},
            billType:'month',
            minDate: new Date(2000, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            year:new Date().getFullYear(),
            month:new Date().getMonth(),
            showYear:false,
            showMonth:false,
            income:'0.00',
            pay:'0.00',
            showSet:false,
            list:[{account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]},
            {account_money: 1000,
            account_type: "income",
            create_month: 3,
            create_year: 2021,
            dayBillList:[{account_type: "income",
                create_day: 7,
                create_month: 3,
                create_week: 7,
                create_year: 2021}
            ]}]
        }
    },
    created(){
        
    },
    methods:{
        goSet() {
            this.showSet = true;
        },
        change(){
            this.billType=this.billType=='month'?'year':'month'
            this.showYear=false
            this.showMonth=false
        },
        formatter(type, val) {
        if (type === 'year') {
            this.year=val;
            return `${val}年`;
        } else if (type === 'month') {
            this.month=val
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
        },
        godetaol(val){
            this.$router.push({path:'/details?id='+val})
        }
    }
}
</script>

<style>
</style>