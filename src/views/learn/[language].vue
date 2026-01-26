<template>
  <div class="learn-page">
    <!-- 顶部导航 -->
    <header class="top-bar">
      <span class="back" @click="goHome">← 返回</span>
      <span class="title">挂壁课堂</span>
      <span class="login-btn" @click="goLogin">登录</span>
      <span class="menu-btn" @click="showMenu = !showMenu">☰</span>
    </header>

    <div class="main-container">
      <!-- 左侧菜单 - 显示路线所有课程 -->
      <aside class="sidebar" :class="{ show: showMenu }">
        <div v-for="course in pathCourses" :key="course.id" class="course-menu">
          <div 
            class="course-title" 
            :class="{ active: course.id === courseId, expanded: expandedCourses.has(course.id) }"
            @click="toggleCourse(course)"
          >
            <span>{{ course.icon }} {{ course.title }}</span>
            <span class="arrow">{{ expandedCourses.has(course.id) ? '▾' : '▸' }}</span>
          </div>
          
          <div v-show="expandedCourses.has(course.id)" class="chapter-list">
            <div 
              v-for="chapter in course.chapters" 
              :key="chapter.id"
              class="chapter-item"
              :class="{ active: activeChapter?.id === chapter.id }"
              @click="selectChapter(course.id, chapter)"
            >
              {{ chapter.title }}
            </div>
          </div>
        </div>
      </aside>

      <!-- 右侧内容 -->
      <main class="content" @click="showMenu = false">
        <template v-if="activeChapter">
          <!-- 章节标题+视频 -->
          <div class="chapter-header">
            <h1>{{ activeChapter.title }}</h1>
            <span v-if="activeChapter.video" class="chapter-video-btn" @click="playVideo(activeChapter.video)">▶ 观看章节</span>
          </div>

          <!-- 知识点列表 -->
          <div v-for="lesson in activeChapter.lessons" :key="lesson.id" class="lesson-section">
            <div :id="'lesson-' + lesson.id" class="lesson-title">
              <span>{{ lesson.title }}</span>
              <span v-if="lesson.video" class="lesson-video-btn" @click="playVideo(lesson.video)">▶ 观看知识点</span>
            </div>
            
            <!-- Blocks内容流 -->
            <div class="blocks">
              <template v-for="block in lesson.blocks" :key="block.id">
                <h3 v-if="block.type === 'heading'" :id="'block-' + block.id" class="block-heading">{{ block.content }}</h3>
                <p v-else-if="block.type === 'text'" :id="'block-' + block.id" class="block-text">{{ block.content }}</p>
                <ul v-else-if="block.type === 'list'" :id="'block-' + block.id" class="block-list">
                  <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
                </ul>
                <div v-else-if="block.type === 'image'" :id="'block-' + block.id" class="block-image">
                  <img :src="block.src" loading="lazy" />
                </div>
                <div v-else-if="block.type === 'video'" :id="'block-' + block.id" class="block-video">
                  <video :src="block.src" controls></video>
                </div>
                <div v-else-if="block.type === 'code'" :id="'block-' + block.id" class="block-code">
                  <div class="code-head">
                    <span class="filename">{{ block.filename || (block.language === 'java' ? 'Main.java' : block.language) }}</span>
                    <div class="copy-box">
                      <span v-if="copiedId === block.id" class="copy-text">已复制</span>
                      <span class="copy-icon" @click="copy(block.code || '', block.id)">
                        <svg v-if="copiedId !== block.id" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        <svg v-else viewBox="0 0 24 24" width="14" height="14" class="check"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </span>
                    </div>
                  </div>
                  <pre><code>{{ block.code }}</code></pre>
                </div>
                <div v-else-if="block.type === 'table'" :id="'block-' + block.id" class="block-table">
                  <table>
                    <thead><tr><th v-for="h in block.headers" :key="h">{{ h }}</th></tr></thead>
                    <tbody><tr v-for="(row, i) in block.rows" :key="i"><td v-for="(cell, j) in row" :key="j">{{ cell }}</td></tr></tbody>
                  </table>
                </div>
                <div v-else-if="block.type === 'tip'" :id="'block-' + block.id" class="block-tip">💡 {{ block.content }}</div>
                <div v-else-if="block.type === 'warning'" :id="'block-' + block.id" class="block-warning">⚠️ {{ block.content }}</div>
                <blockquote v-else-if="block.type === 'quote'" :id="'block-' + block.id" class="block-quote">{{ block.content }}</blockquote>
              </template>
            </div>
          </div>
        </template>
        
        <div v-else class="empty">请从左侧选择章节</div>
      </main>

      <!-- 右侧悬浮导航 -->
      <aside v-if="activeChapter" class="quick-nav">
        <div v-for="lesson in activeChapter.lessons" :key="lesson.id" class="nav-group">
          <div class="nav-item" @click="scrollToElement('lesson-' + lesson.id)">
            <span class="dot">●</span>{{ lesson.title }}
          </div>
          <div v-for="block in lesson.blocks.filter(b => b.type === 'heading')" :key="block.id" class="nav-sub" @click="scrollToElement('block-' + block.id)">
            {{ block.content }}
          </div>
        </div>
      </aside>
    </div>

    <!-- 视频弹窗 -->
    <div v-if="videoUrl" class="video-modal" @click="videoUrl = ''">
      <video 
        ref="videoPlayer"
        :src="videoUrl" 
        controls 
        autoplay 
        @click.stop
      ></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCourse, getPathCourses } from '@/mock/courseData'
import type { Chapter } from '@/types/course'

const route = useRoute()
const router = useRouter()

const courseId = computed(() => route.params.language as string)
const currentCourse = computed(() => getCourse(courseId.value))
const pathCourses = computed(() => currentCourse.value ? getPathCourses(currentCourse.value.pathId) : [])

const expandedCourses = ref<Set<string>>(new Set())
const activeChapter = ref<Chapter | null>(null)
const showMenu = ref(false)
const videoUrl = ref('')
const videoPlayer = ref<HTMLVideoElement | null>(null)
const copiedId = ref('')

function init() {
  if (currentCourse.value) {
    expandedCourses.value.add(currentCourse.value.id)
    if (currentCourse.value.chapters.length) {
      activeChapter.value = currentCourse.value.chapters[0]
    }
  }
}

onMounted(init)
watch(courseId, () => {
  expandedCourses.value.clear()
  activeChapter.value = null
  init()
})

function toggleCourse(course: any) {
  if (expandedCourses.value.has(course.id)) {
    expandedCourses.value.delete(course.id)
  } else {
    // 点击一个课程后，其他的自动收起
    expandedCourses.value.clear()
    expandedCourses.value.add(course.id)
  }
}

function selectChapter(cid: string, chapter: Chapter) {
  if (cid !== courseId.value) {
    router.push(`/learn/${cid}`)
  }
  activeChapter.value = chapter
  showMenu.value = false
  window.scrollTo({ top: 0, behavior: 'instant' })
}

async function playVideo(url: string) {
  videoUrl.value = url
  await nextTick()
  if (videoPlayer.value) {
    try {
      if (videoPlayer.value.requestFullscreen) {
        await videoPlayer.value.requestFullscreen()
      } else if ((videoPlayer.value as any).webkitRequestFullscreen) {
        await (videoPlayer.value as any).webkitRequestFullscreen()
      } else if ((videoPlayer.value as any).msRequestFullscreen) {
        await (videoPlayer.value as any).msRequestFullscreen()
      }
    } catch (err) {
      console.log('无法进入全屏模式:', err)
    }
  }
}

function copy(text: string, id: string) {
  navigator.clipboard.writeText(text)
  copiedId.value = id
  setTimeout(() => {
    if (copiedId.value === id) copiedId.value = ''
  }, 2000)
}

function goHome() {
  router.push('/')
}

function goLogin() {
  router.push('/login')
}

function scrollToElement(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const offsetTop = el.offsetTop - 80
    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.learn-page { min-height: 100vh; background: #f5f5f5; }

/* 顶栏 */
.top-bar {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}
.back { cursor: pointer; color: #666; font-size: 14px; }
.back:hover { color: #333; }
.title { flex: 1; text-align: center; font-weight: bold; font-size: 18px; color: #333; }
.login-btn {
  font-size: 14px;
  color: #4A90D9;
  cursor: pointer;
}
.login-btn:hover { text-decoration: underline; }
.menu-btn { display: none; font-size: 20px; cursor: pointer; color: #666; margin-left: 12px; }

/* 主容器 */
.main-container { display: flex; }

/* 侧边栏 - 固定 */
.sidebar {
  width: 150px;
  background: #fff;
  border-right: 1px solid #eee;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  overflow-y: auto;
  flex-shrink: 0;
}
.course-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;
  cursor: pointer;
  font-size: 13px;
  color: #333;
  border-bottom: 1px solid #f5f5f5;
  line-height: 1.4;
}
.course-title:hover { background: #f9f9f9; }
.course-title.active { color: #4A90D9; font-weight: 500; }
.arrow { color: #999; font-size: 16px; transition: transform 0.2s; }
.course-title.expanded .arrow { transform: rotate(0deg); }

.chapter-list { background: #fafafa; }
.chapter-item {
  padding: 10px 16px 10px 32px;
  cursor: pointer;
  font-size: 13px;
  color: #666;
  border-left: 2px solid transparent;
}
.chapter-item:hover { background: #f0f0f0; color: #333; }
.chapter-item.active { background: #e8f4ff; color: #4A90D9; border-left-color: #4A90D9; }

/* 内容区 - 无边距 */
.content { flex: 1; padding: 20px 110px 20px 24px; min-width: 0; }

.chapter-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}
.chapter-header h1 { font-size: 20px; color: #333; margin: 0; }
.chapter-video-btn {
  font-size: 12px;
  color: #4A90D9;
  cursor: pointer;
  padding: 4px 10px;
  border: 1px solid #4A90D9;
  border-radius: 4px;
}
.chapter-video-btn:hover {
  background: #4A90D9;
  color: #fff;
}

/* 知识点 */
.lesson-section { margin-bottom: 28px; }
.lesson-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  padding-left: 10px;
  border-left: 3px solid #4A90D9;
}
.lesson-video-btn {
  font-size: 12px;
  color: #4A90D9;
  cursor: pointer;
  padding: 2px 8px;
  border: 1px solid #4A90D9;
  border-radius: 4px;
}
.lesson-video-btn:hover {
  background: #4A90D9;
  color: #fff;
}

/* Blocks */
.blocks { padding-left: 13px; }
.block-heading { font-size: 15px; color: #333; margin: 16px 0 8px; }
.block-text { font-size: 14px; line-height: 1.7; color: #555; margin-bottom: 10px; }
.block-list { font-size: 14px; line-height: 1.7; color: #555; padding-left: 20px; margin-bottom: 10px; }
.block-list li { margin-bottom: 4px; }

.block-image img, .block-video video { max-width: 100%; border-radius: 4px; margin: 10px 0; }

.block-code {
  background: #1e1e1e;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
}
.code-head {
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
  background: #2d2d2d;
  font-size: 11px;
  color: #9cdcfe;
}
.filename {
  font-family: Consolas, monospace;
}
.copy-box {
  display: flex;
  align-items: center;
  gap: 6px;
}
.copy-text {
  font-size: 11px;
  color: #2ECC71;
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateX(4px); }
  to { opacity: 1; transform: translateX(0); }
}
.copy-icon {
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 3px;
}
.copy-icon:hover { color: #fff; background: rgba(255,255,255,0.1); }
.copy-icon .check { color: #2ECC71; }
.block-code pre {
  margin: 0;
  padding: 10px;
  overflow-x: auto;
  font-family: Consolas, monospace;
  font-size: 13px;
  color: #d4d4d4;
  line-height: 1.5;
}

.block-table { margin: 10px 0; overflow-x: auto; }
.block-table table { width: 100%; border-collapse: collapse; font-size: 13px; }
.block-table th, .block-table td { border: 1px solid #e5e5e5; padding: 8px 10px; text-align: left; }
.block-table th { background: #f5f5f5; font-weight: 500; }

.block-tip {
  padding: 10px 14px;
  background: #e8f8f0;
  border-radius: 4px;
  color: #2d8659;
  font-size: 13px;
  margin: 10px 0;
}
.block-warning {
  padding: 10px 14px;
  background: #fff8e6;
  border-radius: 4px;
  color: #b58105;
  font-size: 13px;
  margin: 10px 0;
}
.block-quote {
  margin: 10px 0;
  padding: 10px 16px;
  border-left: 3px solid #ddd;
  color: #666;
  font-size: 14px;
  font-style: italic;
  background: #f9f9f9;
}

.empty { text-align: center; padding: 60px; color: #999; }

/* 右侧轻量导航 */
.quick-nav {
  position: fixed;
  top: 52px;
  right: 0;
  width: 100px;
  max-height: calc(100vh - 60px);
  background: rgba(255,255,255,0.9);
  border-left: 1px solid #eee;
  font-size: 13px;
  overflow-y: auto;
  padding: 2px 0;
}
.nav-group { margin-bottom: 2px; }
.nav-item {
  padding: 3px 6px;
  cursor: pointer;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 4px;
}
.dot { font-size: 8px; color: #4A90D9; }
.nav-item:hover { color: #4A90D9; background: #f5f5f5; }
.nav-sub {
  padding: 2px 6px 2px 18px;
  cursor: pointer;
  color: #666;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
}
.nav-sub::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 50%;
  width: 4px;
  height: 1px;
  background: #ccc;
}
.nav-sub:hover { color: #4A90D9; }

/* 视频弹窗 */
.video-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}
.video-modal video { max-width: 90%; max-height: 80%; border-radius: 8px; }

/* 移动端 */
@media (max-width: 768px) {
  .menu-btn { display: block; }
  .main-container { flex-direction: column; }
  .sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    width: 180px;
    height: calc(100vh - 50px);
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: 99;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }
  .sidebar.show { transform: translateX(0); }
  .content { padding: 16px; }
  .chapter-header h1 { font-size: 18px; }
  
  /* 移动端隐藏导航 */
  .quick-nav { display: none; }
}
</style>
