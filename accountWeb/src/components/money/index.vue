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
                            <span>作者: <span class="name">{{item.author}}</span> </span> 
                            <span class="time">{{item.create_time}}</span> 
                        </div>
                        <div class="follow" @click="goFollow(index,item.share_id)" :style="{'background-color':item.follow?'#ffda44':'#fff'}">
                            <div v-if="!item.follow">
                                <van-icon name="plus" />
                                关注
                            </div>
                            <div v-else>
                                已关注
                            </div>
                        </div>
                    </div>
                    <div class="con" @click="godetail(item.share_id)">
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
export default {
   components:{
       [Icon.name]:Icon
   },
    data(){
        return{
            follow: false,
            list:[{share_id:'12',
                title:'理财经验分享',
                content:'理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:false,
            },{share_id:'12',
                title:'理财经验分享',
                content:'    理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:true},
                {share_id:'12',
                title:'理财经验分享',
                content:'理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:false,
            },{share_id:'12',
                title:'理财经验分享',
                content:'    理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:true},
                {share_id:'12',
                title:'理财经验分享',
                content:'理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:false,
            },{share_id:'12',
                title:'理财经验分享',
                content:'    理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:true}]
        }
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