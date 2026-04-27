import { writeFileSync } from 'fs'

// 重建完整的课程数据
const courses = [
  {
    "id": "java-basic",
    "pathId": "java",
    "title": "Java基础",
    "desc": "计算+存储：理解计算机本质",
    "icon": "📚",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境安装",
        "video": "http://gb-code.com/assets/jisuan.webm",
        "lessons": [
          {
            "id": "l1",
            "title": "JDK下载安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "JDK是Java开发工具包，包含编译器和运行环境。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "访问Oracle官网或使用OpenJDK",
                  "下载对应系统版本",
                  "运行安装程序"
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "推荐JDK 17或21 LTS版本"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-basic",
    "pathId": "frontend",
    "title": "HTML基础",
    "desc": "写商品文章页面",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "第一个网页",
        "lessons": [
          {
            "id": "l1",
            "title": "网页是什么",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "网页是由HTML、CSS和JavaScript组成的文件。"
              }
            ]
          }
        ]
      }
    ]
  }
]

// 写入完整的courseData.ts文件
const content = `import type { Course, NavItem } from '@/types/course'

// 顶部导航
export const navItems: NavItem[] = [
  { id: 'java', name: 'Java', path: '/learn?courseType=java' },
  { id: 'frontend', name: '前端', path: '/learn?courseType=frontend' },
]

// 视频占位
const video = 'https://www.w3schools.com/html/mov_bbb.mp4'
const img = (s: string) => \`https://picsum.photos/seed/\${s}/800/400\`

// ========== 所有课程数据 ==========
export const courses: Course[] = [
  ${JSON.stringify(courses, null, 2).replace(/\n/g, '\n  ').replace(/^\s*\[/, '').replace(/\s*\]$/, '')}
]

// 根据ID获取课程
export function getCourse(id: string): Course | undefined {
  return courses.find(c => c.id === id)
}

// 根据pathId获取同路线的所有课程
export function getPathCourses(pathId: string): Course[] {
  return courses.filter(c => c.pathId === pathId)
}

// 首页课程卡片
export const homeCoursesData = [
  { id: 1, theme: 0, icon: '☕', title: 'Java基础', name: 'Java入门到精通', desc: '系统学习Java核心语法、面向对象、集合框架', views: 1582, courseId: 'java-basic' },
  { id: 2, theme: 1, icon: '🌐', title: 'HTML基础', name: 'Web前端入门', desc: 'HTML/CSS/JS，前端开发基础', views: 4521, courseId: 'frontend-basic' },
]
`

writeFileSync('src/mock/courseData.ts', content)
console.log('Done! Course data rebuilt.')
