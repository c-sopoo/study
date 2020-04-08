<template>
  <aside class="sidebar" :class="{'sidebar-hide': !opennav}">
    <el-menu class="sidebar-menu" :default-active="selectMenu" :collapse="!opennav" :collapse-transition="false" :router="true">
      <template v-for="menu in user.accessMenu">
        <el-menu-item v-if="!menu.children" :key="menu.name" :index="menu.path">
          <i :class="menu.icon" v-if="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
        <the-submenu :key="menu.name" :subMenu="menu" v-else></the-submenu>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import TheLayoutSubSidebar from './TheLayoutSubSidebar'
import { mapState } from 'vuex'
export default {
  props:['opennav'],
  data() {
    return {

    }
  },
  computed: {
    selectMenu () {
      return this.$route.meta.menuPath || this.$route.path
    },
    
    ...mapState(['user'])
  },
  components: {
    'the-submenu': TheLayoutSubSidebar
  },
  created() {

},

}
</script>

<style lang='scss'>
.sidebar {
  float: left;
  width: 240px;
  // transition: width .2s ease;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  overflow: auto;
  .sidebar-menu {
    border: none;
    height: 100%;
  }
  
}
.sidebar-hide {
    width: 65px;
    transition: width .2s;
  }
</style>