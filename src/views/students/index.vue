<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface Student {
  id: number
  name: string
  studentId: string
  grade: string
  major: string
}

const tableData = ref<Student[]>([
  {
    id: 1,
    name: '张三',
    studentId: '2024001',
    grade: '2024',
    major: '计算机科学'
  }
])

const dialogVisible = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  name: '',
  studentId: '',
  grade: '',
  major: ''
})

const rules: FormRules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  studentId: [{ required: true, message: '请输入学号', trigger: 'blur' }],
  grade: [{ required: true, message: '请输入年级', trigger: 'blur' }],
  major: [{ required: true, message: '请输入专业', trigger: 'blur' }]
}

const handleAdd = () => {
  dialogVisible.value = true
  form.value = {
    name: '',
    studentId: '',
    grade: '',
    major: ''
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
  <div class="student-management">
    <div class="header">
      <h2>学生管理</h2>
      <el-button type="primary" @click="handleAdd">添加学生</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="studentId" label="学号" width="120" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="grade" label="年级" width="120" />
      <el-table-column prop="major" label="专业" />
      <el-table-column label="操作" width="180">
        <template #default="{ $index }">
          <el-button type="danger" size="small" @click="handleDelete($index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="添加学生" width="500px">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="80px"
        style="max-width: 460px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="学号" prop="studentId">
          <el-input v-model="form.studentId" />
        </el-form-item>
        <el-form-item label="年级" prop="grade">
          <el-input v-model="form.grade" />
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="form.major" />
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
.student-management {
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