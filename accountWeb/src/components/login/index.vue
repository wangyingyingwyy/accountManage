<template>  
    <div id='login'>
        <div class="head">收支理财</div>
        <div >
            <van-form v-if="login" @submit="onSubmit">
            <van-field
                v-model="tel"
                type="tel"
                name="手机号"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '手机号不能为空' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入"
                :rules="[{ required: true, message: '密码错误' }]"
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
                name="昵称"
                label="昵称"
                placeholder="请输入昵称"
                :rules="[{ required: true, message: '昵称不能为空' }]"
            />
            <van-field
                v-model="tel"
                type="tel"
                name="手机号"
                label="手机号"
                placeholder="请输入手机号"
                :rules="[{ required: true, message: '手机号不能为空' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入"
                :rules="[{ required: true, message: '密码错误' }]"
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
import {Form,Field,Button} from 'vant'
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
            name:''
        }
    },
    methods:{
        change(){
            this.login=this.login?false:true
        },
        onSubmit(values) {
            console.log('submit', values);
            this.$root.goLogin=false
        },
        onSubmit1(values) {
            console.log('submit', values);
        }
    }
}
</script>

<style>

</style>