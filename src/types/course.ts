// ========== 通用课程数据结构 ==========

// Block类型
export type BlockType = 'text' | 'heading' | 'code' | 'image' | 'video' | 'table' | 'tip' | 'list'

// 内容块
export interface Block {
  id: string
  type: BlockType
  content?: string           // text/heading/tip
  items?: string[]           // list
  src?: string               // image/video
  language?: string          // code语言
  code?: string              // code内容
  headers?: string[]         // table表头
  rows?: string[][]          // table数据行
}

// 知识点
export interface Lesson {
  id: string
  title: string
  video?: string             // 知识点视频（小按钮）
  blocks: Block[]
}

// 章节
export interface Chapter {
  id: string
  title: string
  video?: string             // 章节视频（右侧播放）
  lessons: Lesson[]
}

// 课程
export interface Course {
  id: string
  pathId: string             // 所属路线ID，用于查询关联课程
  title: string
  desc?: string
  icon?: string
  chapters: Chapter[]
}

// 导航项
export interface NavItem {
  id: string
  name: string
  path: string
}
