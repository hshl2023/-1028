import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Course {
  id: number
  name: string
  courseId: string
  teacher: string
  credits: number
  capacity: number
  enrolled: number
  schedule: string
  classroom: string
}

export const useCourseStore = defineStore('course', () => {
  const courses = ref<Course[]>([])
  const loading = ref(false)

  const fetchCourses = async () => {
    loading.value = true
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    courses.value = [
      { id: 1, name: '高等数学', courseId: 'C2024001', teacher: '王教授', credits: 4, capacity: 60, enrolled: 45, schedule: '周一 1-2节', classroom: '教学楼101' },
      { id: 2, name: '计算机基础', courseId: 'C2024002', teacher: '李讲师', credits: 3, capacity: 50, enrolled: 38, schedule: '周三 3-4节', classroom: '教学楼202' },
    ]
    loading.value = false
  }

  return {
    courses,
    loading,
    fetchCourses
  }
})