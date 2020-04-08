<template>
  <el-row class="page">
    <el-col :span='24' style="position: absolute;">
      <Header :opennav='openNav' @toggle-open='toggleOpen'></Header>
    </el-col>

    <el-col :span="24" class="page-main">
      <Sider :opennav="openNav"></Sider>
      <section class="page-content" :class="{'page-content-hide-aside': !openNav}">
        <Main></Main>
        <Footer></Footer>
      </section>
    </el-col>
  </el-row>
</template>

<script>
import Header from './TheLayoutHeader'
import Sider from './TheLayoutSidebar'
import Main from './TheLayoutMain'
import Footer from './TheLayoutFooter'
export default {
  data() {
    return {
      openNav: true
    }
  },
  components: {
    Header,
    Sider,
    Main,
    Footer
  },
  methods: {
    toggleOpen() {
      this.openNav = !this.openNav
    }
  },
}
</script>

<style lang='scss' scoped>
  .page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .page-main {
      box-sizing: border-box;
      padding-top: 60px;
      height: 100%;

      .page-content {
        overflow: auto;
        margin-left: 240px;
        height: 100%;
        background-color: #EBEEF5;
      }

      .page-content-hide-aside {
        margin-left: 65px;
      }
    }
  }
</style>