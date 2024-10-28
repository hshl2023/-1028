<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface Teacher {
  id: number
  name: string
  teacherId: string
  department: string
  title: string
}

const tableData = ref<Teacher[]>([
  {
    id: 1,
    name: '李四',
    teacherId: 'T2024001',
    department: '计算机系',
    title: '教授'
  }
])

const dialogVisible = ref(false)
const formRef = ref<FormInstance>()
const form = ref({
  name: '',
  teacherId: '',
  department: '',
  title: ''
})

const rules: FormRules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  teacherId: [{ required: true, message: '请输入教师编号', trigger: 'blur' }],
  department: [{ required: true, message: '请输入所属院系', trigger: 'blur' }],
  title: [{ required: true, message: '请输入职称', trigger: 'blur' }]
}

const handleAdd = () => {
  dialogVisible.value = true
  form.value = {
    name: '',
    teacherId: '',
    department: '',
    title: ''
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
  <div class="teacher-management">
    <div class="header">
      <h2>教师管理</h2>
      <el-button type="primary" @click="handleAdd">添加教师</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="teacherId" label="教师编号" width="120" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="department" label="所属院系" width="180" />
      <el-table-column prop="title" label="职称" />
      <el-table-column label="操作" width="180">
        <template #default="{ $index }">
          <el-button type="danger" size="small" @click="handleDelete($index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="添加教师" width="500px">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
        style="max-width: 460px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="教师编号" prop="teacherId">
          <el-input v-model="form.teacherId" />
        </el-form-item>
        <el-form-item label="所属院系" prop="department">
          <el-input v-model="form.department" />
        </el-form-item>
        <el-form-item label="职称" prop="title">
          <el-input v-model="form.title" />
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
.teacher-management {
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