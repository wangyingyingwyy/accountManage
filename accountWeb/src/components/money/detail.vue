<template>
    <div id='money'>
        <div class="detail_head">
            <van-icon name="arrow-left" @click="goback" />
            <span>理财分享</span>
        </div>
        <div class="shareList">
            <div class="title">
                <div class="author">
                    <span class="author-img">{{page.author.substring(page.author.length-2)}}</span>
                    <div :style="{'display':'inline-block','margin-left':'20px'}">
                        <div class="name">{{page.author}}</div> 
                        <div class="time">{{page.create_time.substring(0,10)+' '+ page.create_time.substring(11,20)}}</div> 
                    </div>
                </div>
                <div v-show="page.author_id!=userId" class="follow" @click="goFollow" :style="{'background-color':page.follow?'#ffda44':'#fff'}">
                    <div v-if="!page.follow">
                        <van-icon name="plus" />
                        关注
                    </div>
                    <div v-else>
                        已关注
                    </div>
                </div>
            </div>
            <div class="con">
                <div class="titles detail_title">{{page.title}}</div>
                <div class="details"><pre>{{page.content}}</pre></div>
            </div>
        </div>
    </div>
</template>

<script>
import './index.css'
import { Icon} from 'vant';
import {shareDetails} from '../../assets/js'
export default {
   components:{
       [Icon.name]:Icon
   },
    data(){
        return{
            page:{share_id:'12',
                title:'理财经验分享',
                content:'理财经验分享理财经验分享',
                author:'zhangsan',
                author_id:'1234',
                create_time:'2021-1-30',
                click_count:'0',
                follow:false,
            },
            userId:JSON.parse(localStorage.getItem('user')).userId
        }
    },
    created() {
        var id=this.$route.query.id
        shareDetails({articleId:id}).then(res=>{
            this.page=res.data.msg[0]
        })
    },
    methods:{
        goback(){
            this.$router.push({path:'/?active=2'})

        },
        goFollow(){
            this.page.follow=this.page.follow?false:true
        }
    }
}
</script>

<style>

</style>