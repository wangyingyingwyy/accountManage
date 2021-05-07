<template>
  <van-popup id='set' v-model="vanpopup" position="right" :click-overlay='close' :style="{ width: '80%',height:'100%' }">
      <div class="set_head">
          <div class="info">
             <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" /> 
             <div class="user">
                 <span>{{name}}</span>
                 <span>{{tel.substr(0,3) + '****'+ tel.substr(7 , tel.length)}}</span>
             </div>
          </div>
      </div>
      <div class="bum">
          <div class="day">
              <span>{{day}}</span>
              <span>记账总天数</span>
          </div>
          <div class="num">
              <span>{{num}}</span>
              <span>记账总笔数</span>
          </div>
      </div>
      <div class="list list1" @click="close">
          <span>查看账单</span>
          <van-icon name="arrow" />
      </div>
      <div class="list" @click="unlogin">
          退出登录
      </div>
  </van-popup>
</template>

<script>
import {Popup,Icon,Dialog} from 'vant'
import './index.css'
export default {
    props:{
        showSet:Boolean
    },
    components:{
        [Popup.name]:Popup,
        [Icon.name]:Icon,
        [Dialog.name]:Dialog
    },
    computed: {
        vanpopup: {
            get() {
                return this.showSet;
            },
            set(value) {
                this.$emit("update:showSet", value);
            }
        }
    },
    data(){
        return{
            name:'张三',
            tel:'11111111111',
            num:7,
            day:65
        }
    },
    created(){
        // console.log(this.showSet)
    },
    methods:{
        close(){
            this.$emit('update:showSet',false)
        },
        unlogin(){
            Dialog.confirm({
            message: '是否退出登录？',
            theme: 'round-button',
            }).then(() => {
                localStorage.removeItem('userId')
                this.close()
                this.$root.goLogin=true
            }).then(() => {
            });
        }
    }
}
</script>

<style>

</style>