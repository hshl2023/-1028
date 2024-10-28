import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Teacher {
  id: number
  name: string
  teacherId: string
  gender: string
  title: string
  department: string
  phone: string
  email: string
}

export const useTeacherStore = defineStore('teacher', () => {
  const teachers = ref<Teacher[]>([])
  const loading = ref(false)

  const fetchTeachers = async () => {
    loading.value = true
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    teachers.value = [
      { id: 1, name: '王教授', teacherId: 'T2024001', gender: '男', title: '教授', department: '计算机系', phone: '13900139000', email: 'wang@example.com' },
      { id: 2, name: '李讲师', teacherId: 'T2024002', gender: '女', title: '讲师', department: '数学系', phone: '13900139001', email: 'li@example.com' },
    ]
    loading.value = false
  }

  return {
    teachers,
    loading,
    fetchTeachers
  }
})