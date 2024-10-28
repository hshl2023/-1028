<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  HomeFilled,
  UserFilled,
  Reading,
  Collection
} from '@element-plus/icons-vue'

const router = useRouter()
const activeMenu = ref(router.currentRoute.value.path)
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <el-menu
        :default-active="activeMenu"
        class="menu"
        router
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/students">
          <el-icon><UserFilled /></el-icon>
          <span>学生管理</span>
        </el-menu-item>
        <el-menu-item index="/teachers">
          <el-icon><Reading /></el-icon>
          <span>教师管理</span>
        </el-menu-item>
        <el-menu-item index="/courses">
          <el-icon><Collection /></el-icon>
          <span>课程管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header">
          <h2>教学管理系统</h2>
          <el-dropdown>
            <span class="user-dropdown">
              管理员 <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
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
    
    .menu {
      height: 100%;
      border-right: none;
      background-color: #304156;
    }
  }

  .el-header {
    background-color: #fff;
    border-bottom: 1px solid #dcdfe6;
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      
      .user-dropdown {
        cursor: pointer;
      }
    }
  }

  .el-main {
    background-color: #f0f2f5;
    padding: 20px;
  }
}
</style>