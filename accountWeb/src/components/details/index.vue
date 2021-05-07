<template>
    <div id="details">
        <div class="head">
            <van-icon name="arrow-left" @click="cancel"/>
            <div class="title">
                <img :src="require('../../assets/imgs/' + imgList[icon_type-1].path)" alt="">
                <span>{{icon_name}}</span>
            </div>
        </div>
        <div class="con">
             <van-field              
                readonly
                clickable
                :value="type=='income'?'收入':'支出'"
                name="类型"
                label="类型"
            />
            <van-field              
                readonly
                clickable
                :value="money"
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
                v-model="details"
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
import {payList,incomeList} from '../../assets/js'
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
        id:'',
        type: 'income',
        money: '1000',
        details:'购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物购物',
        time:'2021年05月02日 星期日',
        icon_type:2,
        icon_name:'购物'
    }
   },
   created(){
       this.id=this.$route.query.id
       this.imgList=this.type=='income'?incomeList:payList
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