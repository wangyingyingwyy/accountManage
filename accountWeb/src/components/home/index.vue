<template>
<div>
  <login v-if="$root.goLogin"/>
  <div v-else id='home'>
    <account v-if="active==0"/>
    <money v-if="active==2"/>
    <van-tabbar v-model="active" active-color="#ffda44" >
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item class="add" icon="add-o" @click="toadd"></van-tabbar-item>
      <van-tabbar-item icon="gold-coin-o">理财</van-tabbar-item>
    </van-tabbar>
  </div>
</div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vant'
import account from '../acccount/index'
import money from '../money/index'
import login from '../login/index'
export default {
  name: 'Home',
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    account,
    money,
    login
  },
  data () {
    return {
      active: 0
    }
  },
  methods:{
    toadd(){
      this.$router.push({path: '/addaccount'})
    }
  },
  created(){
    if(localStorage.getItem('user')){
      this.$root.goLogin=false
    }else{
      this.$root.goLogin=true
    }
    this.active=this.$route.query.active?Number(this.$route.query.active):0
  },
  watch:{
     active(val, oldVal){
       console.log(val)
        this.$router.replace({active:val})
     },
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.add .van-tabbar-item__icon{
    position: absolute;
    top: -20px;
    height: 50px;
    width: 50px;
    color: #000;
    background-color: white;
}
.add .van-tabbar-item__icon i{
  font-size: 50px;
}
</style>
