<template>
    <div id='money'>
        <div class="head">
            <span :style="{'border-bottom':follow?'2px solid black':'none'}" @click="change">关注</span>
            <span :style="{'border-bottom':!follow?'2px solid black':'none'}" @click="change">最新</span>
        </div>
        <div class="shareList">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="title">
                        <div class="author">
                            <span class="author-img">{{item.author.substring(item.author.length-2)}}</span>
                            <div :style="{'display':'inline-block','margin-left':'20px'}">
                                <div class="name">{{item.author}}</div> 
                                <div class="time">{{item.create_time}}</div> 
                            </div>
                        </div>
                        <div class="follow" @click="goFollow(index,item.article_id)" :style="{'background-color':item.follow?'#ffda44':'#fff'}">
                            <div v-if="!item.follow">
                                <van-icon name="plus" />
                                关注
                            </div>
                            <div v-else>
                                已关注
                            </div>
                        </div>
                    </div>
                    <div class="con" @click="godetail(item.article_id)">
                        <div class="titles">{{item.title}}</div>
                        <div class="detail"><pre>{{item.content}}</pre></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="add" @click="add">
             <van-icon name="plus" />
        </div>
    </div>
</template>

<script>
import './index.css'
import { Icon} from 'vant';
import {getShareList,setShare} from '../../assets/js'
export default {
   components:{
       [Icon.name]:Icon
   },
    data(){
        return{
            follow: false,
            list:[]
        }
    },
    created(){
        let userId=JSON.parse(localStorage.getItem('user')).userId;
        getShareList(userId).then(res=>{
            let data=res.data;
            if(data&&data.ok){
                this.list=data.msg;
            }
        })
    },
    methods:{
        change(){
            this.follow=this.follow?false:true
        },
        godetail(id){
            this.$router.push({path:'/pagedetails?id='+id})
        },
        goFollow(index,id){
            this.list[index].follow=this.list[index].follow?false:true
        },
        add(){
            this.$router.push({path:'/addpagedetails'})
        }
    }
}
</script>

<style>

</style>