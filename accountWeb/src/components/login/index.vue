<template>  
    <div id='login'>
        <div class="head">收支理财</div>
        <div >
            <van-form v-if="login" @submit="onSubmit">
            <van-field
                v-model="tel"
                type="tel"
                name="phone"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '手机号不能为空' },{ pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="请输入"
                :rules="[{ required: true, message: '密码不能为空'}]"
                :error-message="errorMsg"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
            <span class="zhu" @click="change">注册</span>
            </van-form>
        <div v-else>
            <van-form @submit="onSubmit1">
                <van-field
                v-model="name"
                name="username"
                label="昵称"
                placeholder="请输入昵称"
                :rules="[{ required: true, message: '昵称不能为空' }]"
            />
            <van-field
                v-model="tel"
                type="tel"
                name="phone"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '手机号不能为空' },{ pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
                
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="请输入"
                :rules="[{ required: true, message: '密码不能为空' },{ pattern: /^[0-9]{6,16}$/, message: '密码在6~16位之间'}]"
            />
            <van-field
                v-model="pwd"
                type="password"
                name="pwd"
                label="确认密码"
                placeholder="请输入"
                :rules="[{ required: true, message: '确认密码不能为空' }]"
                :error-message="errMsgs"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">注册</van-button>
            </div>
            <span class="zhu" @click="change">登录</span>
            </van-form> 
            </div>
        </div>
    </div>
</template>

<script>
import './index.css'
import {Form,Field,Button} from 'vant';
import {registerFun,loginFun} from '../../assets/js'
export default {
     components:{
        [Form.name]:Form,
        [Field.name]:Field,
        [Button.name]:Button
    },
    data(){
        return{
            login:true,
            tel:'',
            password:'',
            pwd:'',
            name:'',
            errorMsg:'',
            errMsg:'',
            errMsgs:''
        }
    },
    methods:{
        change(){
            this.login=this.login?false:true
        },
        onSubmit(values) {
             loginFun(values).then(res=>{
                let data = res.data;
                if(data&&data.ok){
                    let user ={
                        userId:data.msg.user_id,
                        userName:data.msg.user_name,
                        userPhone:data.msg.user_phone
                    }
                    localStorage.setItem('user',JSON.stringify(user))
                    this.$root.goLogin=false
                }else{
                    this.errorMsg='密码或手机号错误'
                }
            })
            
        },
        onSubmit1(values) {
            if(values.password==values.pwd){
                registerFun(values).then(res=>{
                let data = res.data;
                if(data&&data.ok){
                    this.login=true
                    return data.msg;
                }else{
                    this.errMsg='该手机号已注册'
                }
            })
            }else{
                this.errMsgs='确认密码错误'
            }
        }
    }
}
</script>

<style>

</style>