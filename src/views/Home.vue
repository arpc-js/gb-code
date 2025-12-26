有<template>
  <div class="home">
    <div class="course-grid">
      <div v-for="course in list" :key="course.id" class="course-card">
        <!-- 封面 -->
        <div class="cover" :class="'theme-' + course.theme">
          <!-- 标题 -->
          <div class="cover-title">{{ course.title }}</div>
          <!-- 技术图标 -->
          <div class="tech-icon">{{ course.icon }}</div>
          <!-- 装饰元素 -->
          <div class="decor-circle"></div>
          <div class="decor-dots"></div>
          <!-- 场景人物 -->
          <div class="scene">
            <div class="person" :class="course.scene"></div>
            <div class="desk"></div>
            <div class="monitor"><div class="screen"></div></div>
          </div>
        </div>
        <!-- 内容 -->
        <div class="info">
          <h3>{{ course.name }}</h3>
          <p>{{ course.desc }}</p>
          <div class="meta">
            <span class="price">会员免费</span>
            <span class="right">
              <span class="views">◉ {{ course.views }}</span>
              <span class="rating">★★★★★</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 假数据 - 每个课程对应技术图标
const list = [
  { id: 1, theme: 0, scene: 's1', icon: '☕', title: 'Javase基础语法', name: 'javase基础语法', desc: 'Java 基础语法涵盖变量声明、数据类型、如整型、浮点型等；控制语句含 if...', views: 1582 },
  { id: 2, theme: 1, scene: 's2', icon: '📝', title: 'IDEA开发工具使用', name: 'idea开发工具使用', desc: 'IntelliJ IDEA 是一款超强大的 Java 开发工具，智能代码补全、高效调试、丰富...', views: 1582 },
  { id: 3, theme: 2, scene: 's3', icon: '☕', title: 'JAVA数组的使用', name: 'java数组的使用', desc: 'Java 数组是存储相同类型元素的容器，可通过下标访问，有一维、多维之分...', views: 1582 },
  { id: 4, theme: 3, scene: 's4', icon: '☕', title: 'JAVA方法定义', name: 'java方法定义', desc: 'Java 方法是一段可重复使用的代码块，由方法名、参数、返回值和方法体组成...', views: 1582 },
  { id: 5, theme: 4, scene: 's5', icon: '🔍', title: 'Ideadebug工具使用', name: 'ideadebug工具使用', desc: 'IDEA Debug 工具可逐行执行代码、设断点、观察变量值，能快速定位程序问题...', views: 1582 },
  { id: 6, theme: 5, scene: 's1', icon: '🐹', title: 'Go语言基础', name: 'Go语言基础入门', desc: 'Go语言简洁高效，内置并发支持，适合微服务、云原生开发...', views: 2341 },
  { id: 7, theme: 6, scene: 's2', icon: '🐍', title: 'Python编程', name: 'Python编程基础', desc: 'Python语法简单易学，广泛应用于数据分析、AI、自动化运维...', views: 3210 },
  { id: 8, theme: 7, scene: 's3', icon: '🍃', title: 'Spring Boot', name: 'SpringBoot实战', desc: 'Spring Boot快速构建Java应用，自动配置、内嵌Tomcat、微服务架构...', views: 4521 },
  { id: 9, theme: 0, scene: 's4', icon: '🗄️', title: 'MySQL数据库', name: 'MySQL数据库入门', desc: '关系型数据库基础，SQL语法、索引优化、事务处理等核心技术...', views: 2890 },
  { id: 10, theme: 1, scene: 's5', icon: '⚡', title: 'Redis缓存', name: 'Redis缓存实战', desc: '高性能NoSQL数据库，缓存、消息队列、分布式锁等应用场景...', views: 1876 },
];
</script>

<style scoped>
.home { max-width: 1400px; margin: 0 auto; padding: 20px; background: #f5f5f5; }

.course-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 1400px) { .course-grid { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 1100px) { .course-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 800px) { .course-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .course-grid { grid-template-columns: 1fr; } }

.course-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all 0.3s;
}
.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

/* 封面 */
.cover {
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  padding: 12px;
}

/* 8种主题 */
.theme-0 { background: linear-gradient(135deg, #4A90D9 0%, #357ABD 100%); }
.theme-1 { background: linear-gradient(135deg, #F5A623 0%, #E8940C 100%); }
.theme-2 { background: linear-gradient(135deg, #50C8E8 0%, #2DB5D8 100%); }
.theme-3 { background: linear-gradient(135deg, #7B68EE 0%, #6A5ACD 100%); }
.theme-4 { background: linear-gradient(135deg, #5DADE2 0%, #3498DB 100%); }
.theme-5 { background: linear-gradient(135deg, #58D68D 0%, #2ECC71 100%); }
.theme-6 { background: linear-gradient(135deg, #F1948A 0%, #E74C3C 100%); }
.theme-7 { background: linear-gradient(135deg, #BB8FCE 0%, #9B59B6 100%); }

/* 封面标题 - 放大往下 */
.cover-title {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  z-index: 5;
  max-width: 60%;
  line-height: 1.3;
}

/* 技术图标 */
.tech-icon {
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 28px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
}

/* 装饰圆 */
.decor-circle {
  position: absolute;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  top: -20px; right: -20px;
}

/* 点阵 */
.decor-dots {
  position: absolute;
  top: 10px; right: 60px;
  width: 24px; height: 24px;
  background-image: radial-gradient(rgba(255,255,255,0.5) 2px, transparent 2px);
  background-size: 6px 6px;
}

/* 场景 */
.scene {
  position: absolute;
  bottom: 8px; right: 10px;
  width: 70px; height: 60px;
}

/* 人物 */
.person {
  position: absolute;
  bottom: 18px; right: 20px;
  width: 28px; height: 40px;
}
.person::before { /* 头 */
  content: '';
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 14px; height: 14px;
  background: #FFDAB9;
  border-radius: 50%;
}
.person::after { /* 身体 */
  content: '';
  position: absolute;
  top: 12px; left: 50%;
  transform: translateX(-50%);
  width: 18px; height: 22px;
  background: #4A90D9;
  border-radius: 4px 4px 2px 2px;
}
.s1.person::after { background: #E74C3C; }
.s2.person::after { background: #3498DB; }
.s3.person::after { background: #9B59B6; }
.s4.person::after { background: #E67E22; }
.s5.person::after { background: #1ABC9C; }

/* 桌子 */
.desk {
  position: absolute;
  bottom: 0; right: 5px;
  width: 55px; height: 12px;
  background: linear-gradient(#ECEFF1, #CFD8DC);
  border-radius: 2px;
}

/* 显示器 */
.monitor {
  position: absolute;
  bottom: 12px; right: 12px;
  width: 30px; height: 22px;
  background: #2C3E50;
  border-radius: 2px;
}
.screen {
  position: absolute;
  top: 2px; left: 2px; right: 2px; bottom: 4px;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  border-radius: 1px;
}
.monitor::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 50%;
  transform: translateX(-50%);
  width: 8px; height: 4px;
  background: #34495E;
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
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 36px;
}
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.price { color: #e74c3c; font-weight: 500; }
.right { display: flex; gap: 8px; align-items: center; }
.views { color: #999; }
.rating { color: #f39c12; font-size: 10px; }
</style>