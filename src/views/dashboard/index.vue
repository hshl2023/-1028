<script setup lang="ts">
import { ref } from 'vue'

const statistics = ref({
  studentCount: 1250,
  teacherCount: 86,
  courseCount: 92,
  activeClasses: 45
})
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>学生总数</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.studentCount }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>教师总数</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.teacherCount }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>课程总数</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.courseCount }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>活跃班级</span>
            </div>
          </template>
          <div class="card-content">
            {{ statistics.activeClasses }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  .card-header {
    font-weight: bold;
  }
  
  .card-content {
    font-size: 24px;
    font-weight: bold;
    color: #409EFF;
    text-align: center;
    padding: 20px 0;
  }
}
</style>