<template>
    <div id='login'>
        <div v-if="login">登录页<span @click="change">去注册</span></div>
        <div v-else>注册页 <span @click="change">去登录</span></div>
    </div>
</template>

<script>
import './index.css'
export default {
    data(){
        return{
            login:false
        }
    },
    methods:{
        change(){
            this.login=this.login?false:true
        }
    }
}
</script>

<style>

</style>