<template>
  <div class="home">
    <!-- 顶部导航 -->
    <nav class="top-nav">
      <div class="nav-container">
        <div class="nav-header">
          <div class="logo">挂壁课堂</div>
          <span class="login-btn" @click="goLogin">登录</span>
        </div>
        <ul class="nav-list">
          <li 
            v-for="item in navItems" 
            :key="item.id"
            class="nav-item"
            @click="goToPath(item.path)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </nav>

    <!-- 课程列表 -->
    <div class="course-grid">
      <div 
        v-for="course in list" 
        :key="course.id" 
        class="course-card"
        @click="goToLearn(course.courseId)"
      >
        <div class="cover" :class="'theme-' + course.theme">
          <div class="cover-title">{{ course.title }}</div>
          <div class="tech-icon">{{ course.icon }}</div>
          <div class="decor-circle"></div>
        </div>
        <div class="info">
          <h3>{{ course.name }}</h3>
          <p>{{ course.desc }}</p>
          <div class="meta">
            <span class="tag">免费</span>
            <span class="views">◎ {{ course.views }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { navItems, homeCoursesData } from '@/mock/courseData'

const router = useRouter()
const list = homeCoursesData

function goToPath(path: string) {
  router.push(path)
}

function goToLearn(pathId: string) {
  router.push(`/learn/${pathId}`)
}

function goLogin() {
  router.push('/login')
}
</script>

<style scoped>
.home { 
  min-height: 100vh; 
  background: #f5f5f5; 
}

/* 顶部导航 - 白色 */
.top-nav {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 24px;
}
.nav-header {
  display: flex;
  align-items: center;
  gap: 16px;
}
.logo {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4px;
  flex: 1;
  flex-wrap: wrap;
}
.nav-item {
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.2s;
}
.nav-item:hover {
  background: #f0f0f0;
  color: #333;
}
.login-btn {
  font-size: 14px;
  color: #4A90D9;
  cursor: pointer;
  white-space: nowrap;
}
.login-btn:hover { text-decoration: underline; }

/* 移动端 */
@media (max-width: 768px) {
  .nav-container { 
    flex-direction: column; 
    gap: 10px;
    padding: 10px 12px;
  }
  .nav-header {
    width: 100%;
    justify-content: space-between;
  }
  .nav-list { 
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    gap: 4px;
  }
  .nav-item { 
    padding: 6px 4px; 
    font-size: 12px;
    text-align: center;
  }
}

/* 课程网格 */
.course-grid {
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 1200px) { .course-grid { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 768px) { 
  .course-grid { 
    grid-template-columns: repeat(2, 1fr); 
    gap: 10px; 
    padding: 12px;
  }
}

.course-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: all 0.2s;
}
.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

/* 封面 */
.cover {
  aspect-ratio: 16/9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 主题色 */
.theme-0 { background: #4A90D9; }
.theme-1 { background: #E8940C; }
.theme-2 { background: #2DB5D8; }
.theme-3 { background: #6A5ACD; }
.theme-4 { background: #3498DB; }
.theme-5 { background: #2ECC71; }

.cover-title {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.tech-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 24px;
}
.decor-circle {
  position: absolute;
  width: 60px; height: 60px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  bottom: -20px; right: -20px;
}

/* 内容 */
.info {
  padding: 12px;
}
.info h3 {
  margin: 0 0 6px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
}
.info p {
  margin: 0 0 8px;
  font-size: 12px;
  color: #888;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.tag { 
  color: #2ECC71; 
  font-size: 11px;
  padding: 2px 6px;
  background: #e8f8f0;
  border-radius: 3px;
}
.views { color: #999; }
</style>