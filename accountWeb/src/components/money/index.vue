<template>
    <div id='money'>
        <div class="head">
            <span :style="{'border-bottom':follow?'2px solid black':'none'}" @click="change(true)">关注</span>
            <span :style="{'border-bottom':!follow?'2px solid black':'none'}" @click="change(false)">最新</span>
        </div>
        <div class="shareList">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="title">
                        <div class="author">
                            <span class="author-img">{{item.author.substring(item.author.length-2)}}</span>
                            <div :style="{'display':'inline-block','margin-left':'5px'}">
                                <div class="name">{{item.author}}</div> 
                                <div class="time">{{item.create_time.substring(0,10)}}</div> 
                            </div>
                        </div>
                        <div v-show="item.author_id!=userId" class="follow" @click="goFollow(index,item.author_id,item.follow)" :style="{'background-color':item.follow?'#ffda44':'#fff'}">
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
import {getShareList,setShare,followAuthor,cancelFollowAuthor} from '../../assets/js'
export default {
   components:{
       [Icon.name]:Icon
   },
    data(){
        return{
            follow: false,
            list:[],
            userId:JSON.parse(localStorage.getItem('user')).userId
        }
    },
    created(){
        getShareList(this.userId).then(res=>{
            let data=res.data;
            if(data&&data.ok){
                this.list=data.msg;
            }
        })
    },
    methods:{
        change(follow){
            this.follow=this.follow?false:true;
            if(follow){
                let followList=[];
                followList=this.list.filter(v=>v.follow===true)
                this.list=followList || [];
            }else{
                getShareList(this.userId).then(res=>{
                    let data=res.data;
                    if(data&&data.ok){
                        this.list=data.msg;
                    }
                })
            }
        },
        godetail(id){
            this.$router.push({path:'/pagedetails?id='+id})
        },
        goFollow(index,id,follow){
            let params={
                currentAuthor:this.userId,
                followAuthor:id
            }
            if(follow){
                cancelFollowAuthor(params).then(res=>{
                    let data=res.data;
                    if(data&&data.ok){
                        console.log(data.msg);
                        getShareList(this.userId).then(res=>{
                            let data=res.data;
                            if(data&&data.ok){
                                this.list=data.msg;
                            }
                        })
                    }
                })
            }else{
                followAuthor(params).then(res=>{
                    let data=res.data;
                    if(data&&data.ok){
                        console.log(data.msg);
                        getShareList(this.userId).then(res=>{
                            let data=res.data;
                            if(data&&data.ok){
                                this.list=data.msg;
                            }
                        })
                    }
                })
            }
            
        },
        add(){
            this.$router.push({path:'/addpagedetails'})
        }
    }
}
</script>

<style>

</style>