<template>
  <div class="editor-page">
    <!-- 顶部 -->
    <header class="header">
      <span class="back" @click="goHome">← 返回首页</span>
      <span class="title">课程管理</span>
    </header>

    <div class="editor-container">
      <!-- 左侧课程树 -->
      <aside class="tree-panel">
        <div class="panel-header">
          <span>课程结构</span>
          <button class="add-btn" @click="addCourse">+ 课程</button>
        </div>
        
        <div class="tree">
          <div v-for="(course, ci) in courseData" :key="course.id" class="tree-course">
            <div class="tree-item course-item" :class="{ active: selected?.type === 'course' && selected.index === ci }" @click="selectCourse(ci)">
              <span>📚 {{ course.title || '新课程' }}</span>
              <span class="actions">
                <button @click.stop="addChapter(ci)">+章</button>
                <button @click.stop="removeCourse(ci)">×</button>
              </span>
            </div>
            
            <div v-for="(chapter, chi) in course.chapters" :key="chapter.id" class="tree-chapter">
              <div class="tree-item chapter-item" :class="{ active: selected?.type === 'chapter' && selected.ci === ci && selected.chi === chi }" @click="selectChapter(ci, chi)">
                <span>📖 {{ chapter.title || '新章节' }}</span>
                <span class="actions">
                  <button @click.stop="addLesson(ci, chi)">+点</button>
                  <button @click.stop="removeChapter(ci, chi)">×</button>
                </span>
              </div>
              
              <div v-for="(lesson, li) in chapter.lessons" :key="lesson.id" class="tree-lesson">
                <div class="tree-item lesson-item" :class="{ active: selected?.type === 'lesson' && selected.ci === ci && selected.chi === chi && selected.li === li }" @click="selectLesson(ci, chi, li)">
                  <span>📝 {{ lesson.title || '新知识点' }}</span>
                  <button class="remove-btn" @click.stop="removeLesson(ci, chi, li)">×</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- 右侧编辑区 -->
      <main class="edit-panel">
        <!-- 课程编辑 -->
        <template v-if="selected?.type === 'course'">
          <h2>编辑课程</h2>
          <div class="form-group">
            <label>课程标题</label>
            <input v-model="courseData[selected.index].title" placeholder="如：Java基础" />
          </div>
          <div class="form-group">
            <label>路线ID</label>
            <input v-model="courseData[selected.index].pathId" placeholder="如：java" />
          </div>
          <div class="form-group">
            <label>图标</label>
            <input v-model="courseData[selected.index].icon" placeholder="如：📚" />
          </div>
          <div class="form-group">
            <label>描述</label>
            <input v-model="courseData[selected.index].desc" placeholder="课程描述" />
          </div>
        </template>

        <!-- 章节编辑 -->
        <template v-else-if="selected?.type === 'chapter'">
          <h2>编辑章节</h2>
          <div class="form-group">
            <label>章节标题</label>
            <input v-model="courseData[selected.ci].chapters[selected.chi].title" placeholder="如：初识Java" />
          </div>
          <div class="form-group">
            <label>章节视频URL</label>
            <input v-model="courseData[selected.ci].chapters[selected.chi].video" placeholder="视频地址（可选）" />
          </div>
        </template>

        <!-- 知识点编辑 -->
        <template v-else-if="selected?.type === 'lesson' && editingLesson">
          <h2>编辑知识点</h2>
          <div class="form-group">
            <label>知识点标题</label>
            <input v-model="editingLesson.title" placeholder="如：变量声明" />
          </div>
          <div class="form-group">
            <label>知识点视频URL</label>
            <input v-model="editingLesson.video" placeholder="视频地址（可选）" />
          </div>
          
          <div class="blocks-editor">
            <div class="blocks-header">
              <span>内容块 (Blocks)</span>
              <select v-model="newBlockType">
                <option value="text">文本</option>
                <option value="heading">标题</option>
                <option value="code">代码</option>
                <option value="list">列表</option>
                <option value="image">图片</option>
                <option value="video">视频</option>
                <option value="table">表格</option>
                <option value="tip">提示</option>
                <option value="warning">警告</option>
                <option value="quote">引用</option>
              </select>
              <button @click="addBlock">添加</button>
            </div>
            
            <div v-for="(block, bi) in editingLesson.blocks" :key="block.id" class="block-item">
              <div class="block-header">
                <span class="block-type">{{ block.type }}</span>
                <button @click="removeBlock(bi)">删除</button>
              </div>
              
              <!-- 文本/标题/提示/警告/引用 -->
              <textarea v-if="['text', 'heading', 'tip', 'warning', 'quote'].includes(block.type)" v-model="block.content" rows="2" placeholder="输入内容"></textarea>
              
              <!-- 代码 -->
              <template v-else-if="block.type === 'code'">
                <div class="row">
                  <input v-model="block.language" placeholder="语言（java/python...）" />
                  <input v-model="block.filename" placeholder="文件名（可选，如 Main.java）" />
                </div>
                <textarea v-model="block.code" rows="5" placeholder="代码内容"></textarea>
              </template>
              
              <!-- 列表 -->
              <template v-else-if="block.type === 'list'">
                <textarea v-model="listText[bi]" rows="3" placeholder="每行一项" @blur="updateList(bi)"></textarea>
              </template>
              
              <!-- 图片/视频 -->
              <input v-else-if="['image', 'video'].includes(block.type)" v-model="block.src" placeholder="资源URL" />
              
              <!-- 表格 -->
              <template v-else-if="block.type === 'table'">
                <input v-model="tableHeaders[bi]" placeholder="表头，逗号分隔" @blur="updateTableHeaders(bi)" />
                <textarea v-model="tableRows[bi]" rows="3" placeholder="每行数据，逗号分隔" @blur="updateTableRows(bi)"></textarea>
              </template>
            </div>
          </div>
        </template>

        <div v-else class="empty-tip">← 点击左侧选择要编辑的内容</div>
        
        <!-- 操作按钮 -->
        <div class="action-area">
          <button class="copy-btn" @click="copyJson">📋 复制JSON</button>
          <button class="reset-btn" @click="resetData">🔄 重置</button>
          <span v-if="saveMsg" class="save-msg">{{ saveMsg }}</span>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { courses as mockCourses } from '@/mock/courseData'
import type { Course, Block, BlockType, Lesson } from '@/types/course'

const router = useRouter()

// 课程数据 - 直接使用mock数据
const courseData = reactive<Course[]>(JSON.parse(JSON.stringify(mockCourses)))

// 选中状态
const selected = ref<{ type: 'course' | 'chapter' | 'lesson', index?: number, ci?: number, chi?: number, li?: number } | null>(null)

// 当前编辑的知识点（直接引用）
const editingLesson = ref<Lesson | null>(null)

// 辅助数据
const newBlockType = ref<BlockType>('text')
const listText = reactive<Record<number, string>>({})
const tableHeaders = reactive<Record<number, string>>({})
const tableRows = reactive<Record<number, string>>({})
const saveMsg = ref('')

// 选择操作
function selectCourse(ci: number) {
  selected.value = { type: 'course', index: ci }
  editingLesson.value = null
}
function selectChapter(ci: number, chi: number) {
  selected.value = { type: 'chapter', ci, chi }
  editingLesson.value = null
}
function selectLesson(ci: number, chi: number, li: number) {
  selected.value = { type: 'lesson', ci, chi, li }
  // 直接引用课程数据中的lesson
  editingLesson.value = courseData[ci].chapters[chi].lessons[li]
  // 初始化辅助数据
  editingLesson.value.blocks.forEach((b, bi) => {
    if (b.type === 'list') listText[bi] = b.items?.join('\n') || ''
    if (b.type === 'table') {
      tableHeaders[bi] = b.headers?.join(',') || ''
      tableRows[bi] = b.rows?.map(r => r.join(',')).join('\n') || ''
    }
  })
}

// 添加操作
function addCourse() {
  courseData.push({
    id: `course-${Date.now()}`,
    pathId: '',
    title: '',
    icon: '📚',
    desc: '',
    chapters: []
  })
}
function addChapter(ci: number) {
  courseData[ci].chapters.push({
    id: `ch-${Date.now()}`,
    title: '',
    video: '',
    lessons: []
  })
}
function addLesson(ci: number, chi: number) {
  courseData[ci].chapters[chi].lessons.push({
    id: `ls-${Date.now()}`,
    title: '',
    video: '',
    blocks: []
  })
}
function addBlock() {
  if (!editingLesson.value) return
  const block: Block = { id: `b-${Date.now()}`, type: newBlockType.value }
  if (['text', 'heading', 'tip', 'warning', 'quote'].includes(newBlockType.value)) block.content = ''
  if (newBlockType.value === 'code') { block.language = ''; block.filename = ''; block.code = '' }
  if (newBlockType.value === 'list') block.items = []
  if (['image', 'video'].includes(newBlockType.value)) block.src = ''
  if (newBlockType.value === 'table') { block.headers = []; block.rows = [] }
  editingLesson.value.blocks.push(block)
}

// 删除操作
function removeCourse(ci: number) {
  courseData.splice(ci, 1)
  selected.value = null
}
function removeChapter(ci: number, chi: number) {
  courseData[ci].chapters.splice(chi, 1)
  selected.value = null
}
function removeLesson(ci: number, chi: number, li: number) {
  courseData[ci].chapters[chi].lessons.splice(li, 1)
  selected.value = null
}
function removeBlock(bi: number) {
  editingLesson.value?.blocks.splice(bi, 1)
}

// 更新列表
function updateList(bi: number) {
  if (!editingLesson.value) return
  const block = editingLesson.value.blocks[bi]
  block.items = listText[bi].split('\n').filter(s => s.trim())
}
function updateTableHeaders(bi: number) {
  if (!editingLesson.value) return
  const block = editingLesson.value.blocks[bi]
  block.headers = tableHeaders[bi].split(',').map(s => s.trim())
}
function updateTableRows(bi: number) {
  if (!editingLesson.value) return
  const block = editingLesson.value.blocks[bi]
  block.rows = tableRows[bi].split('\n').map(line => line.split(',').map(s => s.trim()))
}

// 复制JSON到剪贴板
function copyJson() {
  const json = JSON.stringify(courseData, null, 2)
  navigator.clipboard.writeText(json)
  saveMsg.value = '📋 已复制到剪贴板'
  setTimeout(() => saveMsg.value = '', 2000)
}

// 重置为mock数据
function resetData() {
  if (confirm('确定重置？')) {
    courseData.splice(0, courseData.length, ...JSON.parse(JSON.stringify(mockCourses)))
    selected.value = null
    editingLesson.value = null
    saveMsg.value = '🔄 已重置'
    setTimeout(() => saveMsg.value = '', 2000)
  }
}

function goHome() {
  router.push('/')
}
</script>

<style scoped>
.editor-page { min-height: 100vh; background: #f5f5f5; }

.header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.back { cursor: pointer; color: #666; }
.title { flex: 1; text-align: center; font-weight: 600; font-size: 16px; }

.editor-container { display: flex; height: calc(100vh - 50px); }

/* 左侧树 */
.tree-panel {
  width: 300px;
  background: #fff;
  border-right: 1px solid #eee;
  overflow-y: auto;
}
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}
.add-btn {
  background: #4A90D9;
  color: #fff;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.tree { padding: 8px; }
.tree-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  margin-bottom: 2px;
}
.tree-item:hover { background: #f5f5f5; }
.tree-item.active { background: #e8f4ff; color: #4A90D9; }

.tree-chapter { padding-left: 16px; }
.tree-lesson { padding-left: 32px; }

.actions button, .remove-btn {
  background: none;
  border: 1px solid #ddd;
  padding: 2px 6px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
  margin-left: 4px;
}
.actions button:hover, .remove-btn:hover { background: #f0f0f0; }

/* 右侧编辑 */
.edit-panel {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.edit-panel h2 { font-size: 18px; margin: 0 0 16px; color: #333; }

.form-group { margin-bottom: 16px; }
.form-group label { display: block; font-size: 13px; color: #666; margin-bottom: 6px; }
.form-group input {
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.blocks-editor { margin-top: 24px; }
.blocks-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  font-weight: 600;
}
.blocks-header select, .blocks-header button {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
}
.blocks-header button {
  background: #4A90D9;
  color: #fff;
  border: none;
  cursor: pointer;
}

.block-item {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 12px;
}
.block-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.block-type {
  font-size: 12px;
  color: #fff;
  background: #4A90D9;
  padding: 2px 8px;
  border-radius: 3px;
}
.block-header button {
  background: none;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
}
.block-item input, .block-item textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  margin-top: 6px;
}
.row {
  display: flex;
  gap: 8px;
}
.row input {
  flex: 1;
}
.block-item textarea { font-family: monospace; }

.empty-tip { color: #999; text-align: center; padding: 60px; }

.action-area { 
  margin-top: 24px; 
  padding-top: 16px; 
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  align-items: center;
}
.save-btn, .copy-btn, .reset-btn {
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.save-btn { background: #4A90D9; color: #fff; }
.save-btn:hover { background: #3a7bc8; }
.copy-btn { background: #2ECC71; color: #fff; }
.copy-btn:hover { background: #27ae60; }
.reset-btn { background: #e74c3c; color: #fff; }
.reset-btn:hover { background: #c0392b; }
.save-msg { color: #2ECC71; font-size: 14px; margin-left: 10px; }

@media (max-width: 768px) {
  .editor-container { flex-direction: column; }
  .tree-panel { width: 100%; height: 40vh; }
  .edit-panel { height: 60vh; }
}
</style>
