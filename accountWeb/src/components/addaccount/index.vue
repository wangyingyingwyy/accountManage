<template>
    <div id="add">
        <div class="head">
            <span :style="{'border-bottom':type=='income'?'2px solid black':'none'}" @click="change">收入</span>
            <span :style="{'border-bottom':type=='outcome'?'2px solid black':'none'}" @click="change">支出</span>
        </div>
        <div class="income">
            <div class="iconList">
                <div v-for="(item,index) in imglist" :key="index" >
                    <div @click="chooseIcon(item.type,item.icon)" class="imgs" :style="{'background-color':item.type==icon_type&&item.icon==icon_name?'#ffda44':'rgb(210, 211, 211)'}"><img :src="require('../../assets/imgs/' + item.path)" alt=""></div>
                    <span>{{item.icon}}</span>
                </div>
            </div>
            <div class="money">
                <van-field              
                readonly
                clickable
                :value="value"
                name="金额"
                label="金额"
                placeholder="点此输入金额"
                @touchstart.native.stop="show = true"
                />
                <span>{{text}}</span>
                <van-number-keyboard
                v-model="value"
                :show="show"
                :maxlength="6"
                @blur="show = false"
                />
            </div>
            <van-field
                v-model="message"
                rows="2"
                autosize
                label="备注"
                type="textarea"
                maxlength="50"
                placeholder="点击写备注..."
                show-word-limit
            />
        </div>
        <div class="buts">
            <van-button type="default" @click="cancel">取消</van-button>
            <van-button type="default" @click="commit">确认</van-button>
        </div>
    </div>
</template>

<script>
import './index.css'
import {payList,incomeList,setAccount,getAccountDetails,editAccount} from '../../assets/js'
import { Button,NumberKeyboard,Field } from 'vant';
export default {
   components:{
       [Button.name]:Button,
       [NumberKeyboard.name]:NumberKeyboard,
       [Field.name]:Field
   },
   data(){
       return {
        type: 'outcome',
        show: false,
        value: '',
        text:'',
        message:'',
        imglist:payList,
        icon_type:0,
        icon_name:'',
        id:''
    }
   },
   created(){
       if(this.$route.query.id){
           this.id=this.$route.query.id
            getAccountDetails(this.id).then(res=>{
            let data=res.data;
            if(data&&data.ok){
                this.type=data.msg[0].account_type
                this.value=String(data.msg[0].account_money)
                this.message=data.msg[0].account_details
                this.icon_type=data.msg[0].icon_type
                this.icon_name=data.msg[0].icon_name
                this.imgList=this.type=='income'?incomeList:payList
            }else{
                return false
            }
            
        })
       }else{
           this.imgList=incomeList
       }
   },
   methods:{
       cancel(){
           this.$router.push({path:'/?active=0'})
       },
       change(){
            this.type=this.type=='income'?'outcome':'income'
            if(this.type=='income'){
                this.imglist=incomeList
            }else{
                this.imglist=payList
            }
            if(!this.$route.query.id){
                this.icon_type=0,
                this.icon_name=''
            }
       },
       commit(){
            if(!this.value&&this.icon_type==0){
                return this.text='金额和类型不能为空'
            }
            let userId=JSON.parse(localStorage.getItem('user')).userId;
            let userName=JSON.parse(localStorage.getItem('user')).userName;
            if(this.$route.query.id){
                editAccount({
                    accountMoney:this.value,
                    accountDetails:this.message,
                    iconType:this.icon_type,
                    iconName:this.icon_name,
                    accountId:this.id,
                }).then(res=>{
                this.cancel()
                })
            }else{
                let param={
                    accountType:this.type,
                    accountMoney:this.value,
                    accountDetails:this.message,
                    iconType:this.icon_type,
                    iconName:this.icon_name,
                    userId,
                    userName
                }
                setAccount(param).then(res=>{
                this.cancel()
                })
            }
            
       },
       chooseIcon(type,name){
           this.icon_type=type,
            this.icon_name=name
       },

   },
   watch:{
     value(val, oldVal){
        if(val){
            this.text=''
        }
     },
   }
}
</script>

<style>

</style>