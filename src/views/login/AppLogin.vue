<template>
  <div class="login">
    <div class="login-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" status-icon>
        <h3 class="title">系统登录</h3>
        <el-form-item prop='account'>
          <el-input type='text' v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type='password' v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
          <label>
            <el-checkbox v-model="checked">显示密码</el-checkbox>
          </label>
          <router-link to="/" style="float: right; color: #bbbbbb">忘记密码</router-link>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" style="width:100%" :loading='logining' @click.native.prevent="handleSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/register">
            <el-button style="width:100%">注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import sha256 from 'crypto-js/sha256'
import { requestLogin } from '@/api/user'

export default {
  data() {
    return {
      logining: false,
      fromUrl: '/',
      ruleForm: {
          account: 'admin',
          checkPass: '123456'
        },
      rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        checked: false
    }
  },
  methods: {
    handleSubmit(ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          const loginParams = { username: this.ruleForm.account, password: sha256(this.ruleForm.checkPass) }
          // 传入参数，发起请求
          requestLogin(loginParams).then(data => {
            this.logining = false
            this.$message({
              message:'登录成功',
              type: 'success'
            })
            this.$router.push(this.fromUrl)
          }).catch(err => {
            this.logining = false
            console.log(err)
          })
        }else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    next(vm => {
      if (from.fullPath !== '/register' && !from.meta.errorPage) {
        vm.fromUrl = from.fullPath
      }
    })
  }
}
</script>

<style lang='scss' scoped>
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #eff3f4;
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    .title {
      text-align: center;
      margin-bottom: 15px;
    }
    .login-box {
      width: 100%;
      max-width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background: #fff;
      border-radius: 5px;
      padding: 2.25em;
      box-sizing: border-box;
      border: 1px solid #ddd;

    }
  }
</style>