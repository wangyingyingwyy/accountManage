<template>
    <div id="details">
        <div class="head">
            <van-icon name="arrow-left" @click="cancel"/>
            <div class="title">
                <img :src="require('../../assets/imgs/' + imgList[detailsMsg.icon_type-1].path)" alt="">
                <span>{{detailsMsg.icon_name}}</span>
            </div>
        </div>
        <div class="con">
             <van-field              
                readonly
                clickable
                :value="detailsMsg.type=='income'?'收入':'支出'"
                name="类型"
                label="类型"
            />
            <van-field              
                readonly
                clickable
                :value="detailsMsg.account_money"
                name="金额"
                label="金额"
            />
            <van-field              
                readonly
                clickable
                :value="time"
                name="日期"
                label="日期"
            />
            <van-field 
                class="text" 
                readonly
                clickable          
                v-model="detailsMsg.account_details"
                rows="2"
                autosize
                label="备注"
                type="textarea"
            />
        </div> 
        <div class="buts">
            <van-button type="default" @click="write">编辑</van-button>|
            <van-button type="default" @click="del">删除</van-button>
        </div>
    </div>
</template>

<script>
import './index.css'
import {payList,incomeList,getAccountDetails} from '../../assets/js'
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
        week:{1:'星期一',2:'星期二',3:'星期三',4:'星期四',5:'星期五',6:'星期六',7:'星期日'},
        id:'',
        type: 'income',
        money: '1000',
        details:'购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物',
        time:'',
        icon_type:2,
        icon_name:'购物',
        detailsMsg:{}
    }
   },
   created(){
       this.id=this.$route.query.id
       this.imgList=this.type=='income'?incomeList:payList
        getAccountDetails(this.id).then(res=>{
            let data=res.data;
            if(data&&data.ok){
                this.detailsMsg=data.msg[0];
                this.time=data.msg[0].create_year+'年'+data.msg[0].create_month+'月'+data.msg[0].create_day+'日 '+this.week[data.msg[0].create_week]
                console.log(this.imgList[this.detailsMsg.icon_type-1].path)
            }else{
                return false
            }
        })
   },
   methods:{
       cancel(){
           this.$router.go(-1)
       },
       write(){
           this.$router.push({path:'/addaccount?id='+this.id})
       },
       del(){
           Dialog.confirm({
            message: '是否确认删除此账单，删除后无法在查看？',
            theme: 'round-button',
            }).then(() => {
                this.cancel()
            }).then(() => {
            });
       }
   },
}
</script>

<style>

</style>