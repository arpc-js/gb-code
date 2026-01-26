<template>
  <div class="learn-page">
    <!-- 顶部导航 -->
    <header class="top-bar">
      <span class="back" @click="goHome">← 返回</span>
      <span class="title">挂壁课堂</span>
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
            <button v-if="activeChapter.video" class="play-btn" @click="playVideo(activeChapter.video)">
              ▶ 观看视频
            </button>
          </div>

          <!-- 知识点列表 -->
          <div v-for="lesson in activeChapter.lessons" :key="lesson.id" class="lesson-section">
            <div class="lesson-title">
              <span>{{ lesson.title }}</span>
              <button v-if="lesson.video" class="mini-play" @click="playVideo(lesson.video)" title="播放视频">▶</button>
            </div>
            
            <!-- Blocks内容流 -->
            <div class="blocks">
              <template v-for="block in lesson.blocks" :key="block.id">
                <h3 v-if="block.type === 'heading'" class="block-heading">{{ block.content }}</h3>
                <p v-else-if="block.type === 'text'" class="block-text">{{ block.content }}</p>
                <ul v-else-if="block.type === 'list'" class="block-list">
                  <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
                </ul>
                <div v-else-if="block.type === 'image'" class="block-image">
                  <img :src="block.src" loading="lazy" />
                </div>
                <div v-else-if="block.type === 'video'" class="block-video">
                  <video :src="block.src" controls></video>
                </div>
                <div v-else-if="block.type === 'code'" class="block-code">
                  <div class="code-head">
                    <span>{{ block.language }}</span>
                    <button @click="copy(block.code || '')">复制</button>
                  </div>
                  <pre><code>{{ block.code }}</code></pre>
                </div>
                <div v-else-if="block.type === 'table'" class="block-table">
                  <table>
                    <thead><tr><th v-for="h in block.headers" :key="h">{{ h }}</th></tr></thead>
                    <tbody><tr v-for="(row, i) in block.rows" :key="i"><td v-for="(cell, j) in row" :key="j">{{ cell }}</td></tr></tbody>
                  </table>
                </div>
                <div v-else-if="block.type === 'tip'" class="block-tip">💡 {{ block.content }}</div>
              </template>
            </div>
          </div>
        </template>
        
        <div v-else class="empty">请从左侧选择章节</div>
      </main>
    </div>

    <!-- 视频弹窗 -->
    <div v-if="videoUrl" class="video-modal" @click="videoUrl = ''">
      <video :src="videoUrl" controls autoplay @click.stop></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
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

function playVideo(url: string) {
  videoUrl.value = url
}

function copy(text: string) {
  navigator.clipboard.writeText(text)
}

function goHome() {
  router.push('/')
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
.title { flex: 1; text-align: center; font-weight: 600; font-size: 16px; color: #333; }
.menu-btn { display: none; font-size: 20px; cursor: pointer; color: #666; }

/* 主容器 */
.main-container { display: flex; max-width: 1200px; margin: 0 auto; }

/* 侧边栏 */
.sidebar {
  width: 240px;
  background: #fff;
  border-right: 1px solid #eee;
  min-height: calc(100vh - 50px);
  flex-shrink: 0;
}
.course-title {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #f5f5f5;
}
.course-title:hover { background: #f9f9f9; }
.course-title.active { color: #4A90D9; font-weight: 500; }
.arrow { color: #999; font-size: 12px; }

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
.content { flex: 1; padding: 20px 24px; }

.chapter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}
.chapter-header h1 { font-size: 20px; color: #333; margin: 0; }
.play-btn {
  background: #4A90D9;
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
.play-btn:hover { background: #3a7bc8; }

/* 知识点 */
.lesson-section { margin-bottom: 24px; }
.lesson-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  padding-left: 10px;
  border-left: 3px solid #4A90D9;
}
.mini-play {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #4A90D9;
  color: #fff;
  border: none;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mini-play:hover { background: #3a7bc8; }

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
.code-head button {
  background: #4A90D9;
  color: #fff;
  border: none;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 10px;
}
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

.empty { text-align: center; padding: 60px; color: #999; }

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
    width: 260px;
    height: calc(100vh - 50px);
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: 99;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }
  .sidebar.show { transform: translateX(0); }
  .content { padding: 16px; }
  .chapter-header h1 { font-size: 18px; }
}
</style>
