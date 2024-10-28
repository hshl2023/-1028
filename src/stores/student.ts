import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Student {
  id: number
  name: string
  studentId: string
  gender: string
  age: number
  class: string
  major: string
  phone: string
}

export const useStudentStore = defineStore('student', () => {
  const students = ref<Student[]>([])
  const loading = ref(false)

  const fetchStudents = async () => {
    loading.value = true
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    students.value = [
      { id: 1, name: '张三', studentId: '2024001', gender: '男', age: 20, class: '计算机2班', major: '计算机科学', phone: '13800138000' },
      { id: 2, name: '李四', studentId: '2024002', gender: '女', age: 19, class: '计算机1班', major: '计算机科学', phone: '13800138001' },
    ]
    loading.value = false
  }

  return {
    students,
    loading,
    fetchStudents
  }
})