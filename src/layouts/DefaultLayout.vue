<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref(router.currentRoute.value.path)
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        @select="(index) => router.push(index)"
      >
        <el-menu-item index="/students">
          <el-icon><User /></el-icon>
          <span>学生管理</span>
        </el-menu-item>
        <el-menu-item index="/teachers">
          <el-icon><UserFilled /></el-icon>
          <span>教师管理</span>
        </el-menu-item>
        <el-menu-item index="/courses">
          <el-icon><Reading /></el-icon>
          <span>课程管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>教学管理系统</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout-container {
  height: 100vh;

  .el-aside {
    background-color: #304156;
    
    .el-menu {
      border-right: none;
      background-color: transparent;
      
      .el-menu-item {
        color: #bfcbd9;
        
        &:hover, &.is-active {
          color: #409eff;
          background-color: #263445;
        }
      }
    }
  }

  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #dcdfe6;
  }

  .el-main {
    background-color: #f0f2f5;
    padding: 20px;
  }
}
</style>