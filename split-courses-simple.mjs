import { readFileSync, writeFileSync } from 'fs'

const content = readFileSync('src/mock/courseData.ts', 'utf-8')

// 提取courses数组内容
const coursesStart = content.indexOf("export const courses: Course[] =[") + "export const courses: Course[] =[".length
const coursesEnd = content.lastIndexOf("]")
const coursesContent = content.substring(coursesStart, coursesEnd)

// 解析课程
const courses = []
let depth = 0
let courseStart = -1
let inString = false
let escapeNext = false

for (let i = 0; i < coursesContent.length; i++) {
  const ch = coursesContent[i]
  
  if (escapeNext) {
    escapeNext = false
    continue
  }
  
  if (ch === '\\') {
    escapeNext = true
    continue
  }
  
  if (ch === '"') {
    inString = !inString
    continue
  }
  
  if (inString) continue
  
  if (ch === '{') {
    if (depth === 0) {
      courseStart = i
    }
    depth++
  } else if (ch === '}') {
    depth--
    if (depth === 0 && courseStart >= 0) {
      courses.push(coursesContent.substring(courseStart, i + 1))
      courseStart = -1
    }
  }
}

// 分离Java和前端课程
const javaCourses = []
const frontendCourses = []

courses.forEach(courseStr => {
  const pathMatch = courseStr.match(/"pathId":\s*"(.*?)"/)
  if (!pathMatch) return
  
  const pathId = pathMatch[1]
  if (pathId === 'java') {
    javaCourses.push(courseStr)
  } else if (pathId === 'frontend') {
    frontendCourses.push(courseStr)
  }
})

console.log(`Java courses: ${javaCourses.length}`)
console.log(`Frontend courses: ${frontendCourses.length}`)

// 写入Java课程数据
const javaContent = `import type { Course } from '@/types/course'

export const javaCourses: Course[] = [
  ${javaCourses.join(',\n  ')}
]
`

// 写入前端课程数据
const frontendContent = `import type { Course } from '@/types/course'

export const frontendCourses: Course[] = [
  ${frontendCourses.join(',\n  ')}
]
`

// 写入文件
writeFileSync('src/mock/java.ts', javaContent)
writeFileSync('src/mock/front.ts', frontendContent)

// 更新主courseData.ts
const newContent = `import type { Course, NavItem } from '@/types/course'

// 顶部导航
export const navItems: NavItem[] = [
  { id: 'java', name: 'Java', path: '/learn?courseType=java' },
  { id: 'frontend', name: '前端', path: '/learn?courseType=frontend' },
]

// 视频占位
const video = 'https://www.w3schools.com/html/mov_bbb.mp4'
const img = (s: string) => \`https://picsum.photos/seed/\${s}/800/400\`

// 按需加载课程数据
export async function getCoursesByPath(pathId: string): Promise<Course[]> {
  if (pathId === 'java') {
    const { javaCourses } = await import('./java.ts')
    return javaCourses
  } else if (pathId === 'frontend') {
    const { frontendCourses } = await import('./front.ts')
    return frontendCourses
  }
  return []
}

// 根据ID获取课程
export async function getCourse(id: string): Promise<Course | undefined> {
  // 先尝试Java课程
  try {
    const { javaCourses } = await import('./java.ts')
    const course = javaCourses.find(c => c.id === id)
    if (course) return course
  } catch (e) {
    console.error('Error loading Java courses:', e)
  }
  
  // 再尝试前端课程
  try {
    const { frontendCourses } = await import('./front.ts')
    const course = frontendCourses.find(c => c.id === id)
    if (course) return course
  } catch (e) {
    console.error('Error loading Frontend courses:', e)
  }
  
  return undefined
}

// 根据pathId获取同路线的所有课程
export async function getPathCourses(pathId: string): Promise<Course[]> {
  return getCoursesByPath(pathId)
}

// 首页课程卡片
export const homeCoursesData = [
  { id: 1, theme: 0, icon: '☕', title: 'Java基础', name: 'Java入门到精通', desc: '系统学习Java核心语法、面向对象、集合框架', views: 1582, courseId: 'java-basic' },
  { id: 2, theme: 1, icon: '🌐', title: 'HTML基础', name: 'Web前端入门', desc: 'HTML/CSS/JS，前端开发基础', views: 4521, courseId: 'frontend-basic' },
]
`

writeFileSync('src/mock/courseData.ts', newContent)
console.log('Done! Courses split into java.ts and front.ts.')
