<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  router.push('/')
}
</script>

<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>教学管理系统</h2>
      <el-form :model="loginForm" class="login-form">
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="User"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="handleLogin">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;

  .login-card {
    width: 400px;
    
    h2 {
      text-align: center;
      margin-bottom: 30px;
    }

    .login-form {
      .login-button {
        width: 100%;
      }
    }
  }
}
</style>