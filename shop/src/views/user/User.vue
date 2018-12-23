<template>
    <div>
        <van-tabs>
            <van-tab title="登录">
               <van-cell-group>
                <van-field
                    v-model="loginUsername"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
                />
                <van-field
                    v-model="loginPassword"
                    clearable
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                </van-cell-group>
                <van-button size="large" type="primary">登录</van-button>
            </van-tab>
            <van-tab title="注册">
               <van-cell-group>
                <van-field
                    v-model="registerUsername"
                    required
                    clearable
                    label="用户名"
                    placeholder="请输入用户名"
                />
                <van-field
                    v-model="registerPassword"
                    clearable
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                </van-cell-group>
                <van-button size="large" type="primary">注册</van-button>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
       return {
           loginUsername: '',
           loginPassword: '',
           registerUsername: '',
           registerPassword: ''
       }
   },
   methods: {
       //注册
       register() {
           axios.post({
               method: 'post',
               url: '/user',
               data: {
                   username: this.registerUsername,
                   password: this.registerPassword
               }
           })
       }
   },
}
</script>

<style lang="scss" scoped>

</style>

