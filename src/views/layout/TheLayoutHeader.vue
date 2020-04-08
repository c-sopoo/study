<template>
  <el-header class="header el-button--primary">
    <!-- 左侧logo是一个a链接 -->
    <router-link to="/index">
      <div class="logo" :class="{'logo-hide': !opennav}">
        <img src="../../assets/logo.png" alt="">
        <span class="text">cooc</span>
      </div>
    </router-link>
    <div class="content">
      <i v-if="opennav" class="el-icon-s-fold toggle" @click="navOpenToggle" title="隐藏菜单"></i>
      <i v-else class="el-icon-s-unfold toggle" @click="navOpenToggle" title="显示菜单"></i>
    </div>
    <el-dropdown trigger="hover" class="user">
      <span class="user-info">
        {{ user.name }}<i class="el-icon-s-custom" style="margin-left: 10px"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>我的账号</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided>主题设置</el-dropdown-item>
        <el-dropdown-item>语言选择</el-dropdown-item>
        <el-dropdown-item divided>
          <router-link to="/login">
            <el-link :underline="false">退出登录</el-link>
          </router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props:['opennav'],
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    navOpenToggle() {
      this.$emit('toggle-open')
      // console.log(this.$store.state)
    }
  },
}
</script>

<style lang='scss' scoped>
  .header {
    line-height: 60px;
    color: #ffffff;
    overflow: hidden;

    div {
      display: inline-block;

    }

    .logo {
      width: 240px;
      height: 60px;
      // transition: width .5s;
      border-right: 1px solid #C0C4CC;
      margin-left: -20px;
      text-align: center;
      font-size: 25px;
      vertical-align: middle;
      img {
        width: 40px;
        height: 40px;
        vertical-align: middle;
      }
      .text {
        color: #fff;
        vertical-align: middle;
      }
    }

    .logo-hide {
      width: 65px;
      transition: width .2s;
      .text {
        display: none;
      }
    }

    .content {
      padding: 0 20px;
        .toggle {
        font-size: 22px;
        cursor: pointer;
      }
    }

    .user {
      float: right;
        .user-info {
        color: #ffffff;

        i {
          vertical-align: middle;
        }
      }
    }
  }
</style>