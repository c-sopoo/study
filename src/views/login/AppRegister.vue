<template>
  <div class="register">
    <div class="register-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" status-icon>
        <h3 class="title">注册</h3>
        <el-form-item prop='account'>
          <el-input type='text' v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input type='password' v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop='checkPass'>
          <el-input type='password' v-model="ruleForm.checkPass" auto-complete="off" placeholder="重复密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">注册</el-button>
        </el-form-item>
        <el-form-item>
          <router-link to="/login">
            <el-button style="width:100%;">登录</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {requestRegister} from '@/api/user'

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if(value === '') {
        return callback(new Error('请输入密码'))
      }else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if(value === '') {
        return callback(new Error('请再次输入密码'))
      }else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致'))
      }else {
        callback()
      }
    }
    return {
      logining: false,
      ruleForm: {
        account: '',
        password: '',
        checkPass: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    handleSubmit() {
      this.$ref.ruleForm.validate((valid) => {
        if(valid) {
          this.logining = true
          var registerParams = {
            usename: this.ruleForm.account,
            password: this.ruleForm.password,
            checkPass: this.ruleForm.checkPass
          }
          requestRegister(registerParams).then(data => {
            this.logining = false
            this.$message({
              message:'注册成功',
              type: 'success'
            })
            this.$rouer.push({path: '/login'})
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
  }
}
</script>

<style lang='scss' scoped>
.register {
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
  .register-box {
    width: 100%;
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 2.25em;
    border: 1px solid #ddd;
    border-radius: 0.5em;
  }
}
</style>