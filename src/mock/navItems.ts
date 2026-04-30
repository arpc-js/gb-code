import type { NavItem } from '@/types/course'

// 顶部导航
export const navItems: NavItem[] = [
  { id: 'java', name: 'Java', path: '/learn/java-basic' },
  { id: 'frontend', name: '前端', path: '/learn/frontend-basic' },
]

// 首页课程卡片
export const homeCoursesData = [
  { id: 1, theme: 0, icon: '☕', title: 'Java基础', name: 'Java入门到精通', desc: '系统学习Java核心语法、面向对象、集合框架', views: 1582, courseId: 'java-basic' },
  { id: 2, theme: 1, icon: '🌐', title: 'JS AI全栈', name: 'JS AI全栈', desc: 'HTML→Node→Agent SDK，JS AI全栈开发', views: 4521, courseId: 'frontend-basic' },
]
