<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface Course {
  id: number
  name: string
  courseId: string
  credits: number
  teacher: string
}

const tableData = ref<Course[]>([
  {
    id: 1,
    name: '计算机网络',
    courseId: 'C2024001',
    credits: 4,
    teacher: '李四'
  }
])

const dialogVisible = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  name: '',
  courseId: '',
  credits: 0,
  teacher: ''
})

const rules: FormRules = {
  name: [{ required: true, message: '请输入课程名称', trigger: 'blur' }],
  courseId: [{ required: true, message: '请输入课程编号', trigger: 'blur' }],
  credits: [{ required: true, message: '请输入学分', trigger: 'blur' }],
  teacher: [{ required: true, message: '请输入授课教师', trigger: 'blur' }]
}

const handleAdd = () => {
  dialogVisible.value = true
  form.value = {
    name: '',
    courseId: '',
    credits: 0,
    teacher: ''
  }
}

const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      tableData.value.push({
        id: tableData.value.length + 1,
        ...form.value
      })
      dialogVisible.value = false
    }
  })
}

const handleDelete = (index: number) => {
  tableData.value.splice(index, 1)
}
</script>

<template>
  <div class="course-management">
    <div class="header">
      <h2>课程管理</h2>
      <el-button type="primary" @click="handleAdd">添加课程</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="courseId" label="课程编号" width="120" />
      <el-table-column prop="name" label="课程名称" width="180" />
      <el-table-column prop="credits" label="学分" width="100" />
      <el-table-column prop="teacher" label="授课教师" />
      <el-table-column label="操作" width="180">
        <template #default="{ $index }">
          <el-button type="danger" size="small" @click="handleDelete($index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="添加课程" width="500px">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        style="max-width: 460px"
      >
        <el-form-item label="课程名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="课程编号" prop="courseId">
          <el-input v-model="form.courseId" />
        </el-form-item>
        <el-form-item label="学分" prop="credits">
          <el-input-number v-model="form.credits" :min="0" :max="10" />
        </el-form-item>
        <el-form-item label="授课教师" prop="teacher">
          <el-input v-model="form.teacher" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit(formRef)">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.course-management {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  margin: 0;
}
</style>