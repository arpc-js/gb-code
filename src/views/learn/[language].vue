<template>
  <div class="learn-page">
    <!-- 顶部导航 -->
    <header class="top-bar">
      <span class="back" @click="goHome">← 返回</span>
      <span class="title">gb-code</span>
      <span class="login-btn" @click="goLogin">登录</span>
      <span class="menu-btn" @click="showMenu = !showMenu">☰</span>
    </header>

    <div class="main-container">
      <!-- 左侧菜单 -->
      <aside class="sidebar" :class="{ show: showMenu }">
        <!-- 课程类型选择（当没有具体课程时） -->
        <div v-if="!courseId" class="course-type-select">
          <div class="type-title">选择课程类型</div>
          <div 
            class="type-item" 
            :class="{ active: selectedType === 'java' }"
            @click="selectCourseType('java')"
          >
            ☕ Java
          </div>
          <div 
            class="type-item" 
            :class="{ active: selectedType === 'frontend' }"
            @click="selectCourseType('frontend')"
          >
            🌐 前端
          </div>
        </div>
        
        <!-- 课程列表（当选择了课程类型或有具体课程时） -->
        <div v-else v-for="course in pathCourses" :key="course.id" class="course-menu">
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
        <!-- 课程类型选择页面 -->
        <div v-if="!courseId" class="course-type-page">
          <h1>选择课程类型</h1>
          <div class="type-cards">
            <div class="type-card" @click="selectCourseType('java')">
              <div class="type-icon">☕</div>
              <div class="type-info">
                <h2>Java课程</h2>
                <p>系统学习Java核心语法、面向对象、集合框架</p>
                <div class="type-courses">{{ javaCoursesCount }} 门课程</div>
              </div>
            </div>
            <div class="type-card" @click="selectCourseType('frontend')">
              <div class="type-icon">🌐</div>
              <div class="type-info">
                <h2>前端课程</h2>
                <p>HTML/CSS/JS，前端开发基础</p>
                <div class="type-courses">{{ frontendCoursesCount }} 门课程</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 课程内容页面 -->
        <template v-else-if="activeChapter">
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
                <a v-else-if="block.type === 'download'" :id="'block-' + block.id" class="block-download" :href="block.url" download>
                  💾 {{ block.text || '下载文件' }}
                </a>
                <div v-else-if="block.type === 'flowchart'" :id="'block-' + block.id" class="fc">
                  <div class="fc-node start">{{ block.steps?.[0]?.text }}</div>
                  <div class="fc-line">|</div>
                  <div class="fc-node decision" id="fc-step2">{{ block.steps?.[1]?.text }}</div>
                  <div class="fc-tree">
                    <span class="fc-branch-line left">/</span>
                    <span class="fc-branch-line right">\</span>
                  </div>
                  <div class="fc-labels">
                    <span>没到&nbsp;</span>
                    <span>&nbsp;&nbsp;到了&nbsp;&nbsp;</span>
                  </div>
                  <div class="fc-children">
                    <div class="fc-child">
                      <div class="fc-node">{{ block.steps?.[2]?.text }}</div>
                      <div class="fc-line">|</div>
                      <div class="fc-node fc-step4">{{ block.steps?.[3]?.text }}</div>
                      <div class="fc-back-txt">进入下次循环,第5次结束</div>
                    </div>
                    <div class="fc-child">
                      <div class="fc-node end">{{ block.steps?.[4]?.text }}</div>
                    </div>
                  </div>
                </div>
                <!-- if单分支流程图 -->
                <div v-else-if="block.type === 'flowchart-if'" :id="'block-' + block.id" class="fc-if">
                  <div class="fc-node decision">{{ block.steps?.[0]?.text }}</div>
                  <div class="fc-if-tree">
                    <span>/</span>
                    <span>\</span>
                  </div>
                  <div class="fc-if-labels">
                    <span>true</span>
                    <span>false</span>
                  </div>
                  <div class="fc-if-children">
                    <div class="fc-if-child">
                      <div class="fc-node">{{ block.steps?.[1]?.text }}</div>
                    </div>
                    <div class="fc-if-child fc-if-empty"></div>
                  </div>
                </div>
                <!-- if-else二选一流程图 -->
                <div v-else-if="block.type === 'flowchart-if-else'" :id="'block-' + block.id" class="fc-if">
                  <div class="fc-node decision">{{ block.steps?.[0]?.text }}</div>
                  <div class="fc-if-tree">
                    <span>/</span>
                    <span>\</span>
                  </div>
                  <div class="fc-if-labels">
                    <span>true</span>
                    <span>false</span>
                  </div>
                  <div class="fc-if-children">
                    <div class="fc-if-child">
                      <div class="fc-node">{{ block.steps?.[1]?.text }}</div>
                    </div>
                    <div class="fc-if-child">
                      <div class="fc-node">{{ block.steps?.[2]?.text }}</div>
                    </div>
                  </div>
                </div>
                <!-- if-else if-else多选一流程图 -->
                <div v-else-if="block.type === 'flowchart-if-chain'" :id="'block-' + block.id" class="fc-if">
                  <div class="fc-node decision">{{ block.steps?.[0]?.text }}</div>
                  <div class="fc-if-tree">
                    <span>/</span>
                    <span>\</span>
                  </div>
                  <div class="fc-if-labels">
                    <span>true</span>
                    <span>false</span>
                  </div>
                  <div class="fc-if-children">
                    <div class="fc-if-child">
                      <div class="fc-node">{{ block.steps?.[1]?.text }}</div>
                    </div>
                    <div class="fc-if-child">
                      <div class="fc-node decision">{{ block.steps?.[2]?.text }}</div>
                      <div class="fc-if-tree">
                        <span>/</span>
                        <span>\</span>
                      </div>
                      <div class="fc-if-labels">
                        <span>true</span>
                        <span>false</span>
                      </div>
                      <div class="fc-if-children">
                        <div class="fc-if-child">
                          <div class="fc-node">{{ block.steps?.[3]?.text }}</div>
                        </div>
                        <div class="fc-if-child">
                          <div class="fc-node">{{ block.steps?.[4]?.text }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
        
        <div v-else-if="courseId" class="empty">请从左侧选择章节</div>
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
import type { Chapter, Course } from '@/types/course'

const route = useRoute()
const router = useRouter()

const courseId = computed(() => route.params.language as string)
const currentCourse = ref<Course | null>(null)
const pathCourses = ref<Course[]>([])
const loading = ref(false)

// 新增：课程类型选择相关
const selectedType = ref('java')
const javaCoursesCount = ref(0)
const frontendCoursesCount = ref(0)

const expandedCourses = ref<Set<string>>(new Set())
const activeChapter = ref<Chapter | null>(null)
const showMenu = ref(false)
const videoUrl = ref('')
const videoPlayer = ref<HTMLVideoElement | null>(null)
const copiedId = ref('')

// 加载课程数据
async function loadData() {
  if (!courseId.value) return
  
  loading.value = true
  try {
    const id = courseId.value
    let course: Course | undefined
    let courses: Course[] = []
    
    // 根据courseId前缀判断加载哪个数据文件
    if (id.startsWith('java')) {
      const { javaCourses } = await import('@/mock/java.ts')
      courses = javaCourses
      course = javaCourses.find(c => c.id === id)
    } else if (id.startsWith('frontend') || id.startsWith('ai-')) {
      const { frontendCourses } = await import('@/mock/front.ts')
      courses = frontendCourses
      course = frontendCourses.find(c => c.id === id)
    } else {
      // 默认加载Java课程
      const { javaCourses } = await import('@/mock/java.ts')
      courses = javaCourses
      course = javaCourses.find(c => c.id === id)
    }
    
    currentCourse.value = course || null
    pathCourses.value = courses
    
    init()
  } catch (error) {
    console.error('Error loading course data:', error)
  } finally {
    loading.value = false
  }
}

// 加载课程数量
async function loadCoursesCount() {
  try {
    const id = courseId.value
    
    // 根据courseId前缀判断加载哪个课程数量
    if (id.startsWith('java')) {
      const { javaCourses } = await import('@/mock/java.ts')
      javaCoursesCount.value = javaCourses.length
      frontendCoursesCount.value = 0
    } else if (id.startsWith('frontend') || id.startsWith('ai-')) {
      const { frontendCourses } = await import('@/mock/front.ts')
      frontendCoursesCount.value = frontendCourses.length
      javaCoursesCount.value = 0
    }
  } catch (e) {
    console.error('Error loading courses count:', e)
  }
}

// 初始化
function init() {
  if (currentCourse.value) {
    // 确保当前课程在左侧展开（清除其他，只保留当前）
    expandedCourses.value.clear()
    expandedCourses.value.add(currentCourse.value.id)
    
    // 自动选择第一个章节
    if (currentCourse.value.chapters.length) {
      activeChapter.value = currentCourse.value.chapters[0]
    }
  }
}

// 选择课程类型
function selectCourseType(type: string) {
  selectedType.value = type
  
  // 根据类型跳转到对应课程列表的第一个课程
  if (type === 'java') {
    router.push('/learn/java-basic')
  } else if (type === 'frontend') {
    router.push('/learn/frontend-basic')
  }
}

// 生命周期
onMounted(async () => {
  await loadCoursesCount()
  await loadData()
})

// 监听课程ID变化
watch(courseId, async () => {
  activeChapter.value = null
  await loadData()
})

// 切换课程展开/收起
function toggleCourse(course: any) {
  // 如果是交互式页面课程，直接跳转
  if (course.interactivePage) {
    router.push(course.interactivePage)
    return
  }
  
  if (expandedCourses.value.has(course.id)) {
    expandedCourses.value.delete(course.id)
  } else {
    // 点击一个课程后，其他的自动收起
    expandedCourses.value.clear()
    expandedCourses.value.add(course.id)
  }
}

// 选择章节
function selectChapter(cid: string, chapter: Chapter) {
  if (cid !== courseId.value) {
    router.push(`/learn/${cid}`)
  }
  activeChapter.value = chapter
  showMenu.value = false
  window.scrollTo({ top: 0, behavior: 'instant' })
}

// 播放视频
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

// 复制代码
function copy(text: string, id: string) {
  navigator.clipboard.writeText(text)
  copiedId.value = id
  setTimeout(() => {
    if (copiedId.value === id) copiedId.value = ''
  }, 2000)
}

// 导航
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
  width: 180px;
  background: #fff;
  border-right: 1px solid #eee;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  overflow-y: auto;
  flex-shrink: 0;
}

/* 课程类型选择 */
.course-type-select {
  padding: 12px;
}
.type-title {
  font-size: 12px;
  font-weight: 600;
  color: #666;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.type-item {
  padding: 10px 12px;
  margin-bottom: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  color: #333;
  transition: all 0.2s;
  border: 1px solid #e5e5e5;
}
.type-item:hover {
  background: #f5f5f5;
  border-color: #4A90D9;
}
.type-item.active {
  background: #4A90D9;
  color: #fff;
  border-color: #4A90D9;
}

/* 课程菜单 */
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

/* 内容区 */
.content { flex: 1; padding: 20px 110px 20px 24px; min-width: 0; }

/* 课程类型选择页面 */
.course-type-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}
.course-type-page h1 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 600;
}
.type-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}
.type-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.type-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  border-color: #4A90D9;
}
.type-icon {
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
}
.type-info h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}
.type-info p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
}
.type-courses {
  text-align: center;
  font-size: 13px;
  color: #4A90D9;
  font-weight: 500;
  padding: 8px 0;
  border-top: 1px solid #f0f0f0;
}

/* 章节头部 */
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
.block-download {
  display: inline-block;
  margin: 10px 0;
  padding: 10px 20px;
  background: #4A90D9;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
}
.block-download:hover {
  background: #3a7bc8;
}

/* 流程图 - 树状 */
.fc {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  font-family: monospace;
  font-size: 12px;
  line-height: 1.2;
  position: relative;
}
.fc-node {
  padding: 3px 8px;
  border: 1px solid #4A90D9;
  border-radius: 3px;
  background: #e8f4fc;
}
.fc-node.start { border-radius: 10px; background: #d4edda; border-color: #28a745; }
.fc-node.decision { background: #fff3cd; border-color: #ffc107; position: relative; }
.fc-node.decision::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-left: 5px solid #4A90D9;
}
.fc-node.end { border-radius: 10px; background: #f8d7da; border-color: #dc3545; }
.fc-node.fc-step4 { position: relative; }
.fc-node.fc-step4::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  width: 6px;
  height: 1px;
  background: #4A90D9;
}
.fc-node.fc-step4::after {
  content: '';
  position: absolute;
  left: -10px;
  bottom: 50%;
  width: 48px;
  height: 87px;
  border-left: 1px solid #4A90D9;
  border-top: 1px solid #4A90D9;
  border-radius: 3px 0 0 0;
}
.fc-line { color: #666; }
.fc-tree { display: flex; gap: 50px; color: #666; font-size: 14px; }
.fc-labels { display: flex; gap: 20px; font-size: 10px; color: #666; }
.fc-children { display: flex; gap: 16px; }
.fc-child { display: flex; flex-direction: column; align-items: center; }
.fc-back-txt { font-size: 11px; color: #4A90D9; margin-top: 4px; }

/* if单分支/二选一流程图 */
.fc-if {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  font-family: monospace;
  font-size: 12px;
  line-height: 1.2;
}
.fc-if .fc-node { padding: 3px 8px; border: 1px solid #4A90D9; border-radius: 3px; background: #e8f4fc; }
.fc-if .fc-node.decision { background: #fff3cd; border-color: #ffc107; }
.fc-if .fc-node.end { border-radius: 10px; background: #f8d7da; border-color: #dc3545; }
.fc-if-tree { display: flex; gap: 20px; color: #666; font-size: 14px; }
.fc-if-labels { display: flex; gap: 10px; font-size: 10px; color: #666; }
.fc-if-children { display: flex; gap: 10px; align-items: flex-start; }
.fc-if-child { display: flex; flex-direction: column; align-items: center; }
.fc-if-empty { min-width: 60px; height: 20px; }
.fc-if-merge-tree { display: flex; gap: 40px; color: #666; font-size: 14px; }

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
  
  /* 移动端课程类型页面 */
  .course-type-page {
    padding: 20px 16px;
  }
  .course-type-page h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
  .type-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .type-card {
    padding: 20px;
  }
  
  /* 移动端隐藏导航 */
  .quick-nav { display: none; }
}
</style>
