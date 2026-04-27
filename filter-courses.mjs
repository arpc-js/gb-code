import { readFileSync, writeFileSync } from 'fs'

const content = readFileSync('src/mock/courseData.ts', 'utf-8')

// Extract navItems section (lines 1-70)
const navItemsStart = content.indexOf("export const navItems")
const navItemsEnd = content.indexOf("]", navItemsStart) + 1
const navSection = content.substring(0, navItemsEnd + 1)

// Extract the courses array content
const coursesStart = content.indexOf("export const courses: Course[] =[") + "export const courses: Course[] =[".length
const coursesEnd = content.lastIndexOf("]")
const coursesContent = content.substring(coursesStart, coursesEnd)

// Parse courses by finding top-level objects (those with "pathId")
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

// Filter courses with pathId "java" or "frontend"
const filtered = courses.filter(c => {
  const pathMatch = c.match(/"pathId":\s*"(.*?)"/)
  if (!pathMatch) return false
  return pathMatch[1] === 'java' || pathMatch[1] === 'frontend'
})

console.log(`Total courses: ${courses.length}`)
console.log(`Filtered courses (java + frontend): ${filtered.length}`)

// Build new file
const newNavItems = `import type { Course, NavItem } from '@/types/course'

// 顶部导航
export const navItems: NavItem[] = [
  { 
    id: 'frontend', 
    name: '前端', 
    path: '/learn?lang=frontend',
    children: [
      { id: 'fe-html', name: 'HTML', path: '/learn?lang=html' },
      { id: 'fe-vue', name: 'Vue', path: '/learn?lang=vue' },
      { id: 'fe-react', name: 'React', path: '/learn?lang=react' },
    ]
  },
  { id: 'java', name: 'Java', path: '/learn/java-basic' },
]`

const newCourses = filtered.join(',\n  ')

const newHomeCourses = `// 首页课程卡片
export const homeCoursesData = [
  { id: 1, theme: 0, icon: '☕', title: 'Java基础', name: 'Java入门到精通', desc: '系统学习Java核心语法、面向对象、集合框架', views: 1582, courseId: 'java-basic' },
  { id: 2, theme: 1, icon: '🌐', title: 'HTML基础', name: 'js全栈', desc: 'HTML/CSS/JS，前端开发基础', views: 4521, courseId: 'frontend-basic' },
]`

const newFile = `${newNavItems}

// 视频占位
const video = 'https://www.w3schools.com/html/mov_bbb.mp4'
const img = (s: string) => \`https://picsum.photos/seed/\${s}/800/400\`

// ========== 所有课程数据 ==========
export const courses: Course[] =[
  ${newCourses}
]

// 根据ID获取课程
export function getCourse(id: string): Course | undefined {
  return courses.find(c => c.id === id)
}

// 根据pathId获取同路线的所有课程
export function getPathCourses(pathId: string): Course[] {
  return courses.filter(c => c.pathId === pathId)
}

${newHomeCourses}
`

writeFileSync('src/mock/courseData.ts', newFile)
console.log('Done! File updated.')
