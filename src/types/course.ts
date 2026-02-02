// ========== 通用课程数据结构 ==========

// Block类型
export type BlockType = 'text' | 'heading' | 'code' | 'image' | 'video' | 'table' | 'tip' | 'warning' | 'quote' | 'list' | 'download' | 'flowchart'

// 流程图步骤
export interface FlowStep {
  text: string
  type?: 'start' | 'process' | 'decision' | 'end'
  branch?: 'yes' | 'no'  // 分支标记
}

// 内容块
export interface Block {
  id: string
  type: BlockType
  content?: string           // text/heading/tip
  items?: string[]           // list
  src?: string               // image/video
  language?: string          // code语言
  filename?: string          // code文件名
  code?: string              // code内容
  headers?: string[]         // table表头
  rows?: string[][]          // table数据行
  text?: string              // download按钮文字
  url?: string               // download链接
  steps?: FlowStep[]         // flowchart步骤
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
  interactivePage?: string   // 交互式页面路由（如AI面试）
  chapters: Chapter[]
}

// 导航项
export interface NavItem {
  id: string
  name: string
  path: string
}
