<template>
    <div id='money'>
        <div class="detail_head">
            <van-icon name="arrow-left" @click="goback" />
            <span>理财分享</span>
        </div>
        <div class="page">
            <van-field              
                v-model="page.title"
                autosize
                rows="1"
                name="标题"
                label="标题"
                type="textarea"
                placeholder="点此输入分享标题"
            />
            <span>{{text}}</span>
            <van-field
                v-model="page.content"
                rows="1"
                autosize
                label="内容"
                type="textarea"
                placeholder="点击写分享内容..."
            />
            <span>{{text2}}</span>
        </div>
        <div class="buts">
            <van-button type="default" @click="goback">取消</van-button>
            <van-button type="default" @click="commit">发布</van-button>
        </div>
    </div>
</template>

<script>
import './index.css'
import { Icon,Field,Button} from 'vant';
export default {
   components:{
       [Icon.name]:Icon,
       [Field.name]:Field,
       [Button.name]:Button
   },
    data(){
        return{
            page:{
                title:'',
                content:'',
            },
            text:'',
            text2:''
        }
    },
    methods:{
        goback(){
            this.$router.push({path:'/?active=2'})
        },
        goFollow(){
            this.page.follow=this.page.follow?false:true
        },
        commit(){
            if(!this.page.title){
               this.text='金额不能为空'
            }
            if(!this.page.content){
               this.text2='内容不能为空'
            }
        }
    },
    watch:{
     page:{
         handler(val, oldVal){
             if(val.title){
            this.text=''
        }
        if(val.content){
            this.text2=''
        }
         },
         deep:true
     },
   }
}
</script>

<style>

</style>